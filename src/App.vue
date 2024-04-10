<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <header
    class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3"
  >
    <a href="#">
      <img src="./assets/img/logo.png" alt="logo" class="h-9" />
    </a>
    <a href="#" class="text-sm">
      <div v-if="true" class="flex gap-2 items-center">
        Day complete!
        <CheckCircleIcon class="h-7 w-7 text-green-500" />
      </div>
      <div v-else class="flex items-center gap-2">
        <div>Progress <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>
</template>

<style scoped></style>
