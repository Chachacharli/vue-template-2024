<template>
  <div>
    <h2>Home</h2>
    <p>{{ route.fullPath }}</p>
    <span>{{ $t('user') }}</span>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
