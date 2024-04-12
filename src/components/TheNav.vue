<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :icon="icon"
        :page="page"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
        @click="emit('navigate', page)"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants.ts'
import { isPageValid } from '../validators.ts'

defineProps({
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid
  }
})

const emit = defineEmits({
  navigate: isPageValid
})
</script>

<style scoped></style>
