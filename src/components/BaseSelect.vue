<template>
  <BaseButton @click="emit('select', null)" :type="BUTTON_TYPE_NEUTRAL">
    <XMarkIcon class="h-8 w-8" />
  </BaseButton>
  <select
    class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
    @change="emit('select', +$event.target.value)"
  >
    <!--+$event.target.value == Number($event.target.value) --->

    <option :selected="isNotSelected" disabled value="">
      {{ placeholder }}
    </option>
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
import {
  validateSelectOptions,
  isUndefinedOrNull,
  isNumberOrNull
} from '../validators'
import { computed } from 'vue'
import { BUTTON_TYPE_NEUTRAL } from '../constants'

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

const emit = defineEmits({
  select: isNumberOrNull
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>
