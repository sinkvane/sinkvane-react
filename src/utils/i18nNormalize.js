export function i18nNormalize(lng) {
  if (!lng) return 'en';
  return lng.split('-')[0]
}