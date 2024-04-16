<template>
  <form
    @submit.prevent="submit"
    action=""
    class="sticky bottom-[72px] flex gap-2 border-t bg-white p-4"
  >
    <input
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
      v-model="activity"
    />
    <BaseButton :disabled="activity.trim() === ''">
      <PlusIcon class="h-8 w-8" />
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { ref, nextTick } from 'vue'
import { isActivityValid } from '../validators.ts'

const emit = defineEmits({
  submit: isActivityValid
})
const activity = ref('')

const submit = async () => {
  emit('submit', activity.value)
  activity.value = ''
  await nextTick(() => window.scrollTo(0, document.body.scrollHeight))
}
</script>
