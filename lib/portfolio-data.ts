export type PortfolioProject = {
  id: number;
  title: string;
  constructionDate: string; // "YYYY-MM"
  registeredDate: string; // "YYYY-MM-DD"
  spaceType: string;
  squareFeet: string;
  workType: string[];
  description: string;
  photos: string[];
};

const makePhotos = (projectId: number) =>
  Array.from({ length: 13 }, (_, i) => {
    const isPortrait = ((projectId * 31 + (i + 1) * 17) % 5) < 2;
    const size = isPortrait ? "900/1200" : "1200/900";
    return `https://picsum.photos/seed/hanvit-${projectId}-${i + 1}/${size}`;
  });

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "용계역푸르지오아파트",
    constructionDate: "2023-12",
    registeredDate: "2026-02-20",
    spaceType: "apartment",
    squareFeet: "24",
    workType: ["현관", "거실", "주방", "욕실"],
    description:
      "화이트 & 블랙 톤으로 정리한 인테리어입니다. 욕실과 거실을 중심으로 공간 밸런스를 맞췄습니다.",
    photos: makePhotos(1),
  },
  {
    id: 2,
    title: "동대구역더샵센트럴시티",
    constructionDate: "2024-03",
    registeredDate: "2026-02-20",
    spaceType: "apartment",
    squareFeet: "34",
    workType: ["현관", "거실", "주방", "침실"],
    description:
      "웜 뉴트럴 컬러를 기반으로 동선을 개선한 시공입니다. 주방과 침실 수납 효율을 높였습니다.",
    photos: makePhotos(2),
  },
  {
    id: 3,
    title: "수성범어W아파트",
    constructionDate: "2024-06",
    registeredDate: "2026-02-21",
    spaceType: "apartment",
    squareFeet: "42",
    workType: ["거실", "주방", "욕실", "드레스룸"],
    description:
      "가족 공용 공간을 넓게 느끼도록 구성한 프로젝트입니다. 거실과 드레스룸의 수납 계획을 강화했습니다.",
    photos: makePhotos(3),
  },
  {
    id: 4,
    title: "월성래미안리모델링",
    constructionDate: "2024-09",
    registeredDate: "2026-02-21",
    spaceType: "apartment",
    squareFeet: "32",
    workType: ["현관", "거실", "주방", "욕실", "침실"],
    description:
      "기존 마감재를 정리하고 톤을 통일한 리모델링입니다. 현관부터 침실까지 연결감을 살려 완성했습니다.",
    photos: makePhotos(4),
  },
  {
    id: 5,
    title: "상인동주택리노베이션",
    constructionDate: "2025-01",
    registeredDate: "2026-02-22",
    spaceType: "house",
    squareFeet: "28",
    workType: ["외부", "현관", "거실", "주방", "욕실"],
    description:
      "주택 외부와 내부를 함께 리뉴얼한 작업입니다. 채광과 환기를 고려해 거실과 주방의 개방감을 높였습니다.",
    photos: makePhotos(5),
  },
  {
    id: 6,
    title: "동성로상가인테리어",
    constructionDate: "2025-04",
    registeredDate: "2026-02-22",
    spaceType: "commercial",
    squareFeet: "18",
    workType: ["파사드", "홀", "조명", "가구"],
    description:
      "브랜드 아이덴티티를 반영한 상가 인테리어입니다. 파사드와 조명 연출에 집중해 첫인상을 강화했습니다.",
    photos: makePhotos(6),
  },
  {
    id: 7,
    title: "혁신도시오피스인테리어",
    constructionDate: "2025-08",
    registeredDate: "2026-02-23",
    spaceType: "commercial",
    squareFeet: "40",
    workType: ["로비", "업무공간", "회의실", "휴게공간"],
    description:
      "업무 효율과 휴식의 균형을 목표로 한 오피스 설계입니다. 로비와 회의실에 포인트 소재를 적용했습니다.",
    photos: makePhotos(7),
  },
  {
    id: 8,
    title: "경산중산자이아파트",
    constructionDate: "2025-11",
    registeredDate: "2026-02-23",
    spaceType: "apartment",
    squareFeet: "29",
    workType: ["현관", "거실", "주방", "욕실", "발코니"],
    description:
      "실사용 중심으로 수납과 유지관리를 개선한 아파트 공사입니다. 발코니를 포함한 생활 동선을 재정비했습니다.",
    photos: makePhotos(8),
  },
];
