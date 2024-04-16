import {
  PAGE_TIMELINE,
  HOUR_IN_DAY,
  MIDNIGHT_HOUR,
  SECONDS_IN_HOUR
} from './constants.ts'
import { isPageValid } from './validators.ts'

export const normalizePageHash = () => {
  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
export const generateActivities = () => {
  return [
    {
      id: id(),
      name: 'Coding',
      secondsToComplete: 0 * SECONDS_IN_HOUR
    },
    {
      id: id(),
      name: 'Training',
      secondsToComplete: 1 * SECONDS_IN_HOUR
    },
    {
      id: id(),
      name: 'Studing',
      secondsToComplete: 2 * SECONDS_IN_HOUR
    }
  ]
}
export const generateTimelineItems = () => {
  const timelineItems = []
  for (let i = MIDNIGHT_HOUR; i < HOUR_IN_DAY; i++) {
    timelineItems.push({ hour: i })
  }
  return timelineItems
}
export const generateSelectOptions = (activities: any) => {
  return activities.map((activity: Activity) => ({
    value: activity.id,
    label: activity.name
  }))
}
export const id = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

//selfmade interface
interface Activity {
  id: string
  name: string
  secondsToComplete: number
}
