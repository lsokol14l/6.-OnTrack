import {
  NAV_ITEMS,
  HOUR_IN_DAY,
  MIDNIGHT_HOUR,
  BUTTON_TYPES
} from './constants'

export const isPageValid = (page: string) => {
  return Object.keys(NAV_ITEMS).includes(page)
}
export const isButtonTypeValid = (type: string) => {
  return BUTTON_TYPES.includes(type)
}
export const isTimelineItemValid = ({ hour }: { hour: number }) => {
  return isHourValid(hour)
}
export const validateSelectOptions = (
  options: { value: number; label: string }[]
) => {
  return options.every(isSelectOptionValid)
}
export const validateTimelineItems = (
  timelineItems: Array<{ hour: number }>
) => {
  return timelineItems.every(isTimelineItemValid)
}
export const isUndefinedOrNull = (value: any) => {
  return isUndefined(value) || isNull(value)
}
export const isNumberOrNull = (value: any) => {
  return isNumber(value) || isNull(value)
}
export const isHourValid = (hour: number) => {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOUR_IN_DAY - 1)
}
export const isActivityValid = (activity: string) => {
  return isNotEmptyString(activity)
}
export const validateActivities = (activities: string[]) => {
  return activities.every(isActivityValid)
}
const isSelectOptionValid = ({ value, label }) => {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}
const isNull = (value: any) => {
  return value === null
}
export const isUndefined = (value: any) => {
  return value === undefined
}
const isNumber = (value: any) => {
  return typeof value === 'number'
}
const isString = (value: any) => {
  return typeof value === 'string'
}
const isBetween = (value: number, min: number, max: number) => {
  return value >= min && value <= max
}
const isNotEmptyString = (value: string) => {
  return isString(value) && value.length > 0
}
