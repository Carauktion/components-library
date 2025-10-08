export const getCSSVariable = (variable: string) => {
  if (typeof window === 'undefined') {
    return ''
  }
  return getComputedStyle(document.body).getPropertyValue(variable)
}
