<template>
  <a :href="`#${PAGE_PROGRESS}`" class="text-sm">
    <div v-if="true" class="flex gap-2 items-center">
      Day complete!
      <CheckCircleIcon class="h-7 w-7 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-2">
      <div>Progress <span class="font-mono">20%</span></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { PAGE_PROGRESS } from '../constants'
</script>

<style scoped></style>
