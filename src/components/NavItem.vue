<template>
  <li class="flex-1">
    <a
      :href="`#${page}`"
      class="flex flex-col p-4 items-center text-xs capitalize"
    >
      <component :is="icon" class="h-6 w-6" />
      {{ page }}
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: Function,
    required: true
  },
  page: String
})
</script>

<style scoped></style>
