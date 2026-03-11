import { PortfolioProject } from "@/lib/portfolio-data";
import { LABEL_BY_ID } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";

function PortfolioCard({ projects }: { projects: PortfolioProject[] }) {
  
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
        const label = LABEL_BY_ID[items.spaceType as keyof typeof LABEL_BY_ID];
        return (
          <div
            key={items.id}
            className="relative w-full h-fit border rounded-2xl shadow-lg overflow-hidden transition-shadow duration-500 hover:shadow-2xl"
          >
            <Link href={`/portfolio/${items.id}`}>
            <div className="relative rounded-t-2xl h-[35vh] overflow-hidden">
            <Image
              src={items.photos[0]}
              alt="사진"
              fill
              unoptimized
              className="w-fit object-cover transition-transform duration-500 hover:scale-105"
            />
            </div>
            <div className="flex flex-col p-5 gap-1">
              <p className="font-bold">{items.title}</p>
              <p className="text-sm">
                {label}ㆍ{items.squareFeet}평형ㆍ
                {items.constructionDate}
              </p>
              <div className="flex gap-2 text-sm font-semibold py-1">
                {(items.workType.length > 3
                  ? [
                      ...items.workType.slice(0, 3),
                      `+${items.workType.length - 3}`,
                    ]
                  : items.workType
                ).map((item, index) => (
                  <div key={index} className="bg-wood-10 rounded-4xl px-3 py-1">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PortfolioCard;
