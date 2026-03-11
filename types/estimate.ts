export type EstimateForm =
  {
    name: string
    phone: string
    address: string
    detailAddress: string
    spaceType: string
    squareFeet: string
    contents: string
    workType: string[]
  }

export const EstimateMap = {
  name: "고객명",
  phone: "연락처",
  address: "주소",
  detailAddress: "상세 주소",
  spaceType: "공간 유형",
  squareFeet: "면적",
  workType: "시공 범위",
  contents: "문의 내용",
}

export const WorkType = [
  { id: "wallpaper", label: "도배" },
  { id: "flooring", label: "바닥" },
  { id: "bathroom", label: "욕실" },
  { id: "kitchen", label: "주방" },
  { id: "sash", label: "샤시 교체" },
  { id: "extension", label: "확장" },
  { id: "furniture", label: "가구" },
  { id: "other", label: "기타" },
] as const;

export const SpaceType = [
  { id: "apartment", label: "아파트" },
  { id: "villa", label: "빌라" },
  { id: "house", label: "주택" },
  { id: "commercial", label: "상가" },
  { id: "temporary_structure", label: "가건물" },
  { id: "other", label: "기타" },
] as const;