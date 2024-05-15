<template>
  <main style="flex-grow: inherit" class="d-flex flex-grow-inherid">
    <side-nav />
    <section style="flex-grow: 1" class="main-content w-100 mt-2" :class="toggleSidenav">
      <!-- superior-nav -->
      <nav
        class="superior-nav bg-primary rounded d-flex justify-content-between superior-navbar mx-2 p-2"
      >
        <!-- bread-crumb -->
        <div class="flex flex-column">
          <BreadCrumb />
          <div name="currency-page"><h5>Home</h5></div>
        </div>
        <!-- user-info -->
        <div class="d-flex align-items-center">
          <button class="btn btn-secondary mx-1" @click="togglebutton">
            <i class="bi bi-list"></i>
          </button>
          <button class="btn btn-secondary mx-1" @click="toggleTheme">
            <span>
              <i :class="theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-brightness-high'"></i>
              {{ theme }}
            </span>
          </button>
          <button @click="hanlderLocalization" class="btn btn-secondary">Locales</button>
        </div>
      </nav>
      <section>
        <slot></slot>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import SideNav from '@/components/sidenav/SideNav.vue'
import BreadCrumb from '@/components/breadcrumb/BreadCrumb.vue'

import { useAppStore } from '@/stores/app'
import { ref, computed } from 'vue'

import useTheme from '@/hooks/useTheme'
import { useLocalization } from '@/hooks/useLocalization'

const { locale, changeLocale } = useLocalization()
const { theme, toggleTheme } = useTheme()
const store = useAppStore()

const isToggle = ref<boolean>(store.isToggle)
const toggleSidenav = computed(() => (isToggle.value ? 'toggle' : ''))

const togglebutton = () => {
  isToggle.value = !isToggle.value
  store.isToggle = isToggle.value
}

const hanlderLocalization = () => {
  if (locale.value === 'es') {
    changeLocale('en')
  } else {
    changeLocale('es')
  }
}

store.$subscribe((_, state) => {
  isToggle.value = state.isToggle
})
</script>
