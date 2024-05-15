<template>
  <div
    :class="`col-${cols} col-md-${md}`"
    class="shadow card-info card rounded bg-bento-body position-relative my-2"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface InfoCard {
  cols?: number
  md?: number
}

defineProps<InfoCard>()
</script>

<style>
.card-info {
  border-bottom: solid #5e72e4 3px;
}
</style>
