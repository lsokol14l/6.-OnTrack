<template>
  <div class="flex flex-col grow">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>

<script setup lang="ts">
import ActivityItem from '../components/ActivityItem.vue'
import { isActivityValid, validateActivities } from '../validators.ts'
import TheActivityForm from '../components/TheActivityForm.vue'
import TheActivitiesEmptyState from '../components/TheActivitiesEmptyState.vue'

defineProps({
  activities: {
    required: true,
    type: Array as () => Activity[],
    validator: validateActivities
  }
})

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid
})

//selfmade interface
interface Activity {
  id: string
  name: string
  secondsToComplete: number
}
</script>
