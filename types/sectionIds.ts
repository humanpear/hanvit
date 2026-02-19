export const NAVIGATION_ITEMS = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '회사 소개' },
    { id: 'portfolio', label: '포트폴리오' },
    { id: 'process', label: '이용 안내' },
    { id: 'contactUs', label: '견적 문의' },
] as const;

export const SECTION_IDS = NAVIGATION_ITEMS.map(item => item.id)

export type SectionId = (typeof NAVIGATION_ITEMS)[number]['id']
