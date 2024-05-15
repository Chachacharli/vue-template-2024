<template>
  <section class="sidenav rounded" :class="toggleSidenav">
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary w-100" @click="togglebutton">
        <i class="bi bi-list"></i>
      </button>
    </div>
    <section name="nav-list">
      <div v-for="route in ROUTES" :key="route.meta.label" class="nav-item text-white my-1 rounded">
        <SideItem v-if="!route.meta.notVisible">
          <router-link
            :to="route.name"
            class="btn btn-nav text-white d-flex align-items-center w-100 h-100"
            :class="isToggle ? 'justify-content-center' : 'px-2'"
          >
            <span class="mx-1 fs-5" :style="{ color: route.meta.color }">
              <i :class="route.meta.icon"></i
            ></span>
            <span v-if="!isToggle" class="text-nav-item fs-6 fw-light text-secondary"
              >{{ $t(route.meta.label) }}
            </span>
          </router-link>
        </SideItem>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { ref, computed } from 'vue'
import SideItem from './SideItem.vue'

const store = useAppStore()
import { ROUTES } from '@/router/routes'

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

<style>
:root {
  --bg-button-nav: #fff;
  --bg-nav: rgba(255, 255, 255, 0.25);
  --color-text-item-nav: #8392ab;
}

[data-bs-theme='dark'] {
  --bg-button-nav: #343a40;
  --bg-nav: rgba(196, 196, 196, 0.25);
  --color-text-item-nav: #fff;
}

.sidenav {
  background: var(--bg-nav);
  box-shadow: 0 8px 32px 0 rgba(88, 88, 88, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.btn-nav {
  background-color: var(--bg-button-nav);
}

.text-nav-item {
  color: var(--color-text-item-nav) !important;
}
</style>
