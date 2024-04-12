<template>
  <BaseButton>
    <XMarkIcon class="h-8 w-8 text-red-500" />
  </BaseButton>
  <select class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl">
    <option selected disabled value="">{{ placeholder }}</option>
    <option
      v-for="option in props.options"
      :key="option.value"
      :value="option.value"
      :selected="option.value === props.selected"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { validateSelectOptions } from '../validators'

const props = defineProps({
  selected: Number,
  placeholder: {
    type: String,
    required: true
  },
  options: {
    type: Array<{ value: number; label: string }>,
    required: true,
    validator: validateSelectOptions
  }
})
</script>
