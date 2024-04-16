<template>
  <button
    :class="`${typeClasses[type as keyof typeof typeClasses]} rounded-full p-3 disabled:cursor-not-allowed disabled:opacity-50 transition`"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY
} from '../constants'
//чтобы статический объект создавался только один раз
const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
  [BUTTON_TYPE_DANGER]: 'bg-red-500 enabled:hover:bg-red-600 text-white',
  [BUTTON_TYPE_PRIMARY]: 'bg-purple-500 enabled:hover:bg-purple-600 text-white'
}
</script>

<script setup lang="ts">
import { isButtonTypeValid } from '../validators.ts'

defineProps({
  type: {
    type: String,
    default: BUTTON_TYPE_PRIMARY,
    validator: isButtonTypeValid
  }
})
</script>
