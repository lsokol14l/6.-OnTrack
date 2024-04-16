<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete', activity)">
        <TrashIcon class="h-8 w-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ props.activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono"
        placeholder="h:mm"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="secondsToComplete"
        @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { ref } from 'vue'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '../constants.ts'
import { isActivityValid, isUndefined } from '../validators.ts'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

const emit = defineEmits({
  delete: isUndefined
})

const secondsToComplete = ref(null)
</script>
