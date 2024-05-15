<template>
  <div>
    <div class="row p-3">
      <InfoCard :md="4">
        <div class="row">
          <div class="col-md-6">Datos</div>
          <div class="col-md-6">Icono</div>
        </div>
      </InfoCard>
    </div>
    <BentoContainer>
      <BentoContent :md="12">
        <h2>Home</h2>
        <p>{{ route.fullPath }}</p>
        <span>{{ $t('user') }}</span>
      </BentoContent>
    </BentoContainer>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BentoContainer from '@/components/bento/BentoContainer.vue'
import BentoContent from '@/components/bento/BentoContent.vue'
import InfoCard from '@/components/cards/InfoCard.vue'

const route = useRoute()
</script>
