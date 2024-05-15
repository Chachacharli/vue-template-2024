<template>
  <div :class="`col-${cols} col-md-${md}`" class="">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface BentoContent {
  cols?: number
  md?: number
}

defineProps<BentoContent>()
</script>
