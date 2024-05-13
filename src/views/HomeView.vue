<template>
  <div>
    <h2>Home</h2>
    <p>{{ route.fullPath }}</p>
    <span>{{ $t('user') }}</span>

    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>

          <th>Edad</th>

          <th>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>30</td>
          <td>New York</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>25</td>
          <td>Los Angeles</td>
        </tr>
        <tr>
          <td>Michael Johnson</td>
          <td>35</td>
          <td>Chicago</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
