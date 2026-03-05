export const spaceFilter = [
  { id: "all", label: "전체보기" },
  { id: "apartment", label: "아파트" },
  { id: "villa", label: "빌라" },
  { id: "house", label: "주택" },
  { id: "commercial", label: "상가" },
  { id: "temporary_structure", label: "가건물" },
  { id: "other", label: "기타" },
] as const

export type SpaceFilterId = (typeof spaceFilter)[number]['id']