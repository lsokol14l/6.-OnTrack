import { PAGE_TIMELINE, HOUR_IN_DAY, MIDNIGHT_HOUR } from './constants.ts'
import { isPageValid } from './validators.ts'

export const normalizePageHash = () => {
  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
export const generateTimelineItems = () => {
  const timelineItems = []
  for (let i = MIDNIGHT_HOUR; i < HOUR_IN_DAY; i++) {
    timelineItems.push({ hour: i })
  }
  return timelineItems
}
