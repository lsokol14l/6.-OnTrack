<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <div class="flex gap-2">
      <BaseSelect
        @select="selectedActivityId = $event"
        :options="activitySelectOptions"
        placeholder="Rest"
        :selected="selectedActivityId"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import BaseSelect from './BaseSelect.vue'
import { isTimelineItemValid, validateSelectOptions } from '../validators'
import { ref } from 'vue'
import TimelineHour from './TimelineHour.vue'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  }
})

const selectedActivityId = ref(0)
</script>
