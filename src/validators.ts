import { NAV_ITEMS, HOUR_IN_DAY, MIDNIGHT_HOUR } from './constants'

export const isPageValid = (page: string) => {
  return Object.keys(NAV_ITEMS).includes(page)
}

export const isTimelineItemValid = ({ hour }: { hour: number }) => {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOUR_IN_DAY
}
export const validateSelectOptions = (
  options: { value: number; label: string }[]
) => {
  return options.every(isSelectOptionValid)
}

const isSelectOptionValid = ({
  value,
  label
}: {
  value: number
  label: string
}) => {
  return typeof value === 'number' && typeof label === 'string'
}

export const validateTimelineItems = (
  timelineItems: Array<{ hour: number }>
) => {
  return timelineItems.every(isTimelineItemValid)
}
