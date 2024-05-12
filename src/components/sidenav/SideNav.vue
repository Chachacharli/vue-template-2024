<template>
  <section class="sidenav bg-primary rounded" :class="toggleSidenav" name="sidenav">
    <button v-if="!isToggle" @click="togglebutton">Toogle</button>
  </section>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { ref, computed } from 'vue'
const store = useAppStore()

const isToggle = ref<boolean>(store.isToggle)
const toggleSidenav = computed(() => (isToggle.value ? 'toggle' : ''))

const togglebutton = () => {
  isToggle.value = !isToggle.value
  store.isToggle = isToggle.value
}

store.$subscribe((_, state) => {
  isToggle.value = state.isToggle
})
</script>

<style></style>
