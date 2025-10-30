<template>
  <section class="wrapper">
    <h2 ref="titleEl">{{ title }}</h2>
    <p>Seconds since mount: {{ tick }}</p>
    <button @click="inc">Local increment (emits event)</button>
    <span> | localCount: {{ localCount }}</span>
    <slot />
  </section>
</template>

<script setup lang="ts">
import {
  ref,
  watch,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onServerPrefetch,
  nextTick,
  defineProps,
  defineEmits,
} from 'vue'

/** Props / Emits */
const props = defineProps<{
  title?: string
  start?: number
  showFaulty?: boolean
}>()
const emit = defineEmits<{
  (e: 'incremented', value: number): void
}>()

/** State */
const title = ref(props.title ?? 'All Hooks Demo (Vue 3)')
const tick = ref(props.start ?? 0)
const localCount = ref(0)
const titleEl = ref<HTMLElement | null>(null)
const showFaulty = ref(props.showFaulty ?? false)
const maybeBoom = ref(false)

/** Interval to show cleanup on unmount */
let handle: number | undefined

/** Watch examples */
watch(
  () => props.title,
  (nv, ov) => {
    // Prop changes still observable with Composition API
    console.log('[watch props.title]', { ov, nv })
    title.value = nv ?? title.value
  }
)

watchEffect(() => {
  // Runs whenever any used reactive source changes
  // console.log('[watchEffect] tick ->', tick.value)
})

/** Lifecycle hooks */
onBeforeMount(() => {
  console.log('[onBeforeMount]')
})

onMounted(async () => {
  console.log('[onMounted] titleEl:', titleEl.value?.textContent)
  // Tick every 1s
  handle = window.setInterval(() => (tick.value += 1), 1000)

  // Example of waiting for next DOM update
  await nextTick()
  // console.log('[nextTick after mount]')
})

onBeforeUpdate(() => {
  // console.log('[onBeforeUpdate]')
})

onUpdated(() => {
  // console.log('[onUpdated]')
})

onBeforeUnmount(() => {
  console.log('[onBeforeUnmount]')
})

onUnmounted(() => {
  console.log('[onUnmounted] cleaning interval')
  if (handle) clearInterval(handle)
})

/** Keep-Alive specific hooks (only fire if parent wraps component in <keep-alive>) */
onActivated(() => {
  console.log('[onActivated]')
})
onDeactivated(() => {
  console.log('[onDeactivated]')
})

/** Dev-only render hooks: super useful for perf debugging */
onRenderTracked((e) => {
  // console.log('[onRenderTracked]', e)
})
onRenderTriggered((e) => {
  // console.log('[onRenderTriggered]', e)
})

/** SSR */
onServerPrefetch(async () => {
  // Only called during SSR to prefetch data
  // await fetchData()
})

/** Error boundary for children */
onErrorCaptured((err, instance, info) => {
  console.warn('[onErrorCaptured]', err, info)
  // Return false to stop the error from propagating further
  return false
})

/** Methods */
function inc() {
  localCount.value++
  emit('incremented', localCount.value)
}


