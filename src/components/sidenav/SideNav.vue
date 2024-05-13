<template>
  <section class="sidenav bg-primary rounded" :class="toggleSidenav">
    <button class="btn btn-primary" @click="togglebutton"><i class="bi bi-list"></i></button>
    <section name="nav-list">
      <div v-for="route in ROUTES" :key="route.meta.label" class="nav-item text-white my-1 rounded">
        <SideItem>
          <router-link
            :to="route.name"
            class="btn btn-secondary text-white d-flex align-items-center w-100 h-100"
            :class="isToggle ? 'justify-content-center' : 'px-2'"
          >
            <span class="mx-1"> <i :class="route.meta.icon"></i></span>
            <span v-if="!isToggle" class="fs-5">{{ $t(route.meta.label) }} </span>
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
