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

export const LABEL_BY_ID: Record<SpaceFilterId, string> = Object.fromEntries(
    spaceFilter.map((x) => [x.id, x.label]),
  ) as Record<SpaceFilterId, string>;

export const PortfolioMap = {
  id: "아이디",
  title: "제목",
  constructionDate: "공사 기간",
  registeredDate: "작성 일자",
  spaceType: "공간 유형",
  squareFeet: "면적",
  workType: "시공 범위",
  description: "설명",
  photos: "이미지"
}