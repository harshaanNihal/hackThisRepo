import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { Document } from 'langchain/document';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { formatDocumentsAsString } from 'langchain/util/document';
import { RunnablePassthrough, RunnableSequence } from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { StructuredOutputParser } from 'langchain/output_parsers';

export const runtime = 'nodejs';

function llm(opts?: { temperature?: number }) {
  return new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4o-mini',
    temperature: opts?.temperature ?? 0.2,
  });
}

let storePromise: Promise<MemoryVectorStore> | null = null;
async function getStore() {
  if (!storePromise) {
    const seedDocs = [
      new Document({ pageContent: 'MobileOffize is an HR/Issue Ticketing system used in Indian Railways.' }),
      new Document({ pageContent: 'Issue Ticketing supports stages: Assign, Work In Progress, Done.' }),
      new Document({ pageContent: 'The iOS app uses versioning like 2.169; Android is released after internal testing.' }),
    ];
    const embeddings = new OpenAIEmbeddings({ apiKey: process.env.OPENAI_API_KEY });
    storePromise = MemoryVectorStore.fromDocuments(seedDocs, embeddings);
  }
  return storePromise;
}

/** ---------- structured extraction schema ---------- */
const invoiceSchema = z.object({
  customer: z.string().describe('Customer full name'),
  email: z.string().email().describe('Customer email'),
  amount: z.number().describe('Invoice amount in INR'),
  dueDate: z.string().describe('ISO date'),
});
const invoiceParser = StructuredOutputParser.fromZodSchema(invoiceSchema);

async function handleAsk(question: string) {
  const store = await getStore();
  const retriever = store.asRetriever({ k: 3 });

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', 'You are concise. Use the provided context. If unsure, say you don’t know.'],
    ['human', 'Question: {question}\n\nContext:\n{context}'],
  ]);

  const chain = RunnableSequence.from([
    { question: new RunnablePassthrough(), context: retriever.pipe(formatDocumentsAsString) },
    prompt,
    llm({ temperature: 0.2 }),
    new StringOutputParser(),
  ]);

  const answer = await chain.invoke(question);
  return { answer };
}

async function handleExtract(text: string) {
  const prompt = ChatPromptTemplate.fromMessages([
    ['system', 'Extract fields and return ONLY strict JSON per schema.'],
    ['human', 'Text:\n{input}\n\nReturn JSON matching this schema:\n{format_instructions}'],
  ]).partial({ format_instructions: invoiceParser.getFormatInstructions() });

  const msgs = await prompt.formatMessages({ input: text });
  const resp = await llm({ temperature: 0 }).invoke(msgs);
  const json = await invoiceParser.parse(String(resp.content));
  return json;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const mode: 'ask' | 'extract' = body?.mode;

    if (mode === 'ask') {
      const q = String(body?.question ?? '').trim();
      if (!q) return NextResponse.json({ error: 'question is required' }, { status: 400 });
      const data = await handleAsk(q);
      return NextResponse.json(data);
    }

    if (mode === 'extract') {
      const text = String(body?.text ?? '').trim();
      if (!text) return NextResponse.json({ error: 'text is required' }, { status: 400 });
      const data = await handleExtract(text);
      return NextResponse.json(data);
    }

    return NextResponse.json({ error: 'Invalid mode. Use "ask" or "extract".' }, { status: 400 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, mode: ['ask', 'extract'] });
}
