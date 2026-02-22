export type PortfolioProject = {
  id: number;
  title: string;
  constructionDate: string; // "YYYY-MM"
  registeredDate: string; // "YYYY-MM-DD"
  spaceType: string;
  floorPlan: string;
  constructionScope: string[];
  photos: string[];
};

const makePhotos = (projectId: number) =>
  Array.from(
    { length: 8 },
    (_, i) => `https://picsum.photos/seed/hanvit-${projectId}-${i + 1}/1200/900`,
  );

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "용계역푸르지오아파트",
    constructionDate: "2023-12",
    registeredDate: "2026-02-20",
    spaceType: "아파트",
    floorPlan: "24평형",
    constructionScope: ["현관", "거실", "주방", "욕실"],
    photos: makePhotos(1),
  },
  {
    id: 2,
    title: "동대구역더샵센트럴시티",
    constructionDate: "2024-03",
    registeredDate: "2026-02-20",
    spaceType: "아파트",
    floorPlan: "34평형",
    constructionScope: ["현관", "거실", "주방", "침실"],
    photos: makePhotos(2),
  },
  {
    id: 3,
    title: "수성범어W아파트",
    constructionDate: "2024-06",
    registeredDate: "2026-02-21",
    spaceType: "아파트",
    floorPlan: "42평형",
    constructionScope: ["거실", "주방", "욕실", "드레스룸"],
    photos: makePhotos(3),
  },
  {
    id: 4,
    title: "월성래미안리모델링",
    constructionDate: "2024-09",
    registeredDate: "2026-02-21",
    spaceType: "아파트",
    floorPlan: "32평형",
    constructionScope: ["현관", "거실", "주방", "욕실", "침실"],
    photos: makePhotos(4),
  },
  {
    id: 5,
    title: "상인동주택리노베이션",
    constructionDate: "2025-01",
    registeredDate: "2026-02-22",
    spaceType: "주택",
    floorPlan: "28평형",
    constructionScope: ["외부", "현관", "거실", "주방", "욕실"],
    photos: makePhotos(5),
  },
  {
    id: 6,
    title: "동성로상가인테리어",
    constructionDate: "2025-04",
    registeredDate: "2026-02-22",
    spaceType: "상가",
    floorPlan: "18평형",
    constructionScope: ["파사드", "홀", "조명", "가구"],
    photos: makePhotos(6),
  },
  {
    id: 7,
    title: "혁신도시오피스인테리어",
    constructionDate: "2025-08",
    registeredDate: "2026-02-23",
    spaceType: "오피스",
    floorPlan: "40평형",
    constructionScope: ["로비", "업무공간", "회의실", "휴게공간"],
    photos: makePhotos(7),
  },
  {
    id: 8,
    title: "경산중산자이아파트",
    constructionDate: "2025-11",
    registeredDate: "2026-02-23",
    spaceType: "아파트",
    floorPlan: "29평형",
    constructionScope: ["현관", "거실", "주방", "욕실", "발코니"],
    photos: makePhotos(8),
  },
];
