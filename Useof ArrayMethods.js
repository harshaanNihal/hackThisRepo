let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let findLongestWord = (arr) => [...arr].sort((a, b) => a.length - b.length)
// - Convert the above array "words" into an array of length of word instead of word.
let lengthOfWords = (words) => [...words].map(word => word.length)
// - Create a new array that only contains word with atleast one vowel.
let wordsWithVowel = words.filter(word => {
  return word.includes("a") ||
    word.includes("e") ||
    word.includes("i") ||
    word.includes("o") ||
    word.includes("u")
})

// - Find the index of the word "rhythm"
words.indexOf("rhythm")
// - Create a new array that contains words not starting with vowel.
let wordsStartsWithoutVowel = words.filter(word => {
  if (
    word.startsWith("a") ||
    word.startsWith("e") ||
    word.startsWith("i") ||
    word.startsWith("o") ||
    word.startsWith("u")
  ) { return false; } else return true
})
// - Create a new array that contains words not ending with vowel
let wordsEndsWithoutVowel = words.filter(word => {
  if (
    word.endsWith("a") ||
    word.endsWith("e") ||
    word.endsWith("i") ||
    word.endsWith("o") ||
    word.endsWith("u")
  ) {
return false; } else return true
})


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
     let sumArray = (numbers) => numbers.reduce((a,b)=> a+b,0)
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
     let multipliedBy3 = (numbers) => numbers.map((a) => a*3)
// - Create a new array that contains only even numbers
    let evenNumbers = (numbers) => numbers.filter((a) => a%2 === 0)
// - Create  a new array that contains only odd numbers.
   let oddNumbers = (numbers) => numbers.filter((a) => a%2 !== 0)
// - Create a new array that should have true for even number and false for odd numbers.
    let evenOdd = (numbers) => numbers.map((a) => a%2 === 0?true:false)
// - Sort the above number in assending order.
    let assendingSort = (numbers) => numbers.sort((a,b) => a-b)
// - Does sort mutate the original array?
     yes,
// - Find the sum of the numbers in the array.
     sumArray(numbers);//87
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
    let averageNumbers = (numbers) => numbers.reduce((a,b)=> a+b/numbers.length,0)

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let averageWordLength = (words) => words.map((a)=> a.length).reduce((a,b)=>a+b/words.length,0)
