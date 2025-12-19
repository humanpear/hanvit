export const SECTION_IDS = [
  'home',
  'about',
  'portfolio',
  'process',
  'contactUs',
] as const

export type SectionId = (typeof SECTION_IDS)[number]
