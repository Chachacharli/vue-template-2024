<template>
  <main style="flex-grow: inherit" class="d-flex flex-grow-inherid">
    <side-nav />
    <section style="flex-grow: 1" class="main-content w-100 mt-2" :class="toggleSidenav">
      <!-- superior-nav -->
      <nav class="bg-secondary d-flex justify-content-between superior-navbar mx-2 p-2 rounded">
        <div class="flex"></div>
        <div class="flex">
          <button @click="togglebutton">Toogle</button>
        </div>
      </nav>
      <section class="p-2">
        <slot></slot>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import SideNav from '@/components/sidenav/SideNav.vue'

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
