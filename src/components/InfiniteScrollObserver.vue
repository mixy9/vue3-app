<template>
  <div ref="observerElement" class="infinite-scroll-observer"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, defineEmits } from 'vue'

const BOTTOM_FETCH_OFFSET_PERCENTAGE = 0.4 // 40%

const emit = defineEmits(['intersect'])
const observer = ref<IntersectionObserver | null>(null)
const observerElement = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const options = {
    rootMargin: `${window.innerHeight * BOTTOM_FETCH_OFFSET_PERCENTAGE}px`,
  }

  observer.value = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      emit('intersect')
    }
  }, options)

  if (observerElement.value) {
    observer.value.observe(observerElement.value)
  }
})

onBeforeUnmount(() => {
  if (observer.value && observerElement.value) {
    observer.value.unobserve(observerElement.value)
  }
  observer.value?.disconnect()
})
</script>
