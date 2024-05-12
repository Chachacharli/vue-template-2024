<template>
  <LayoutMain>
    <router-view></router-view>
  </LayoutMain>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LayoutMain from './views/layouts/LayoutMain.vue'
</script>
