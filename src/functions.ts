import {
  PAGE_TIMELINE,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  HOUR_IN_DAY
} from './constants.ts'

export const normalizePageHash = () => {
  const hash = window.location.hash.slice(1)
  if ([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
    return hash
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export const generateTimelineItems = () => {
  const timelineItems = [{ hour: 0 }]
  for (let i = 1; i < HOUR_IN_DAY; i++) {
    timelineItems.push({ hour: i })
  }
  return timelineItems
}
