<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timelineItem="timelineItem"
        :activity-select-options="activitySelectOptions"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import TimelineItem from '../components/TimelineItem.vue'
import { validateTimelineItems, validateSelectOptions } from '../validators'

defineProps({
  timelineItems: {
    type: Array<{ hour: number }>,
    required: true,
    validator: validateTimelineItems
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  }
})
</script>
