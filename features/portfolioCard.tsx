import { PortfolioProject } from "@/lib/portfolio-data";
import { spaceFilter, SpaceFilterId } from "@/types/portfolio";
import Image from "next/image";

function PortfolioCard({ projects }: { projects: PortfolioProject[] }) {
  const LABEL_BY_ID: Record<SpaceFilterId, string> = Object.fromEntries(
    spaceFilter.map((x) => [x.id, x.label]),
  ) as Record<SpaceFilterId, string>;

  if (!projects.length) {
    return (
      <div className="min-h-200 py-40 text-center text-lg font-semibold">
        아직 보여드릴 프로젝트가 없어요 🥹
      </div>
    );
  }
  return (
    <div className="min-h-200 grid grid-cols-4 gap-5 p-10">
      {projects.map((items) => {
        const label =
          LABEL_BY_ID[items.spaceType as keyof typeof LABEL_BY_ID]
        return (
          <div
            key={items.id}
            className="relative w-full h-fit border rounded-2xl shadow-lg overflow-hidden transition-shadow duration-500 hover:shadow-2xl"
          >
            <Image
              src={items.photos[0]}
              alt="사진"
              width={300}
              height={200}
              unoptimized
              className="rounded-t-2xl object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="flex flex-col p-5 gap-1">
              <p className="font-bold">{items.title}</p>
              <p className="text-sm">
                {label}ㆍ{items.floorPlan}평형ㆍ
                {items.constructionDate}
              </p>
              <div className="flex gap-2 text-sm font-semibold py-1">
                {(items.constructionScope.length > 3
                  ? [
                      ...items.constructionScope.slice(0, 3),
                      `+${items.constructionScope.length - 3}`,
                    ]
                  : items.constructionScope
                ).map((item, index) => (
                  <div key={index} className="bg-wood-10 rounded-4xl px-3 py-1">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PortfolioCard;
