import { portfolioProjects } from "@/lib/portfolio-data";
import PortfolioDetailGallary from "@/features/portfolioDetailGallary";
import Button from "@/components/ui/button";
import { LABEL_BY_ID } from "@/types/portfolio";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectIndex = Number(id) - 1;
  const project = portfolioProjects[projectIndex];

  if (!project) notFound();

  return (
    <section
      id="portfolioDetail"
      className="flex flex-col gap-7 w-screen pt-10"
    >
      <div className="flex flex-col gap-5 mx-auto items-center pb-5">
        <p className="text-wood-30 font-bold">포트폴리오</p>
        <p className="font-batang text-5xl font-bold">{project.title}</p>
        <p>{project.description} </p>
      </div>
      <div className="w-full bg-white pb-10">
        <div className="flex mx-auto w-fit">
          <div className="flex flex-col px-10">
            <Link href={"/portfolio"}>
              <button className="flex w-fit items-center py-8 -ml-3 text-primary font-semibold cursor-pointer transition-all duration-75 hover:font-extrabold">
                <ChevronLeft className="w-8" />
                포트폴리오 목록
              </button>
            </Link>
            <dl
              className="grid grid-cols-[90px_1fr] h-fit
        [&>dt]:font-bold [&>dt]:border-b [&>dt]:py-2
        [&>dd]:font-medium [&>dd]:border-b [&>dd]:py-2"
            >
              <dt>공사 기간</dt>
              <dd>{project.constructionDate}</dd>
              <dt>등록일</dt>
              <dd>{project.registeredDate}</dd>
              <dt>공간 유형</dt>
              <dd>
                {LABEL_BY_ID[project.spaceType as keyof typeof LABEL_BY_ID]}
              </dd>
              <dt>면적</dt>
              <dd>{project.squareFeet}평형</dd>
              <dt className="border-none">시공 범위</dt>
              <dd className="flex gap-2 border-none flex-wrap">
                {project.workType.map((item, index) => (
                  <span
                    className="rounded-4xl bg-wood-10 py-1 px-4"
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </dl>
            <Link href={"/#estimate"}>
              <Button variant="ROUNDED" className="w-80 mt-12 hover:bg-primary">
                견적 문의하기
              </Button>
            </Link>
          </div>
          <PortfolioDetailGallary photos={project.photos} />
        </div>
      </div>
    </section>
  );
}

export default PortfolioDetailPage;
