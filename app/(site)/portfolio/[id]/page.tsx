import Button from "@/components/ui/button";
import PortfolioDetailGallary from "@/features/portfolioDetailGallary";
import { getPortfolioProjectId } from "@/lib/supabase/portfolio/server";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getPortfolioProjectId(id);
  const registeredDate = project?.registeredDate
    ? new Date(project?.registeredDate).toLocaleDateString("sv-SE")
    : "";

  if (!project) notFound();

  return (
    <section
      id="portfolioDetail"
      className="flex w-full flex-col gap-7 pt-20 md:pt-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 pb-5 text-center md:gap-5">
        <p className="text-wood-30 font-bold">포트폴리오</p>
        <p className="font-batang text-3xl font-bold px-4 break-keep sm:text-4xl md:text-5xl">
          {project.title}
        </p>
        <p className="px-4 text-sm leading-relaxed sm:text-base md:px-8">
          {project.description}
        </p>
      </div>
      <div className="w-full bg-white px-4 pb-10 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row">
          <div className="flex flex-col px-4 md:px-6">
            <Link
              href="/portfolio"
              className="-ml-3 flex w-fit items-center py-8 font-semibold text-primary transition-all duration-75 hover:font-extrabold"
            >
              <ChevronLeft className="w-8" />
              포트폴리오 목록
            </Link>
            <dl
              className="grid h-fit grid-cols-[90px_1fr]
        [&>dd]:border-b [&>dd]:py-2 [&>dd]:font-medium
        [&>dt]:border-b [&>dt]:py-2 [&>dt]:font-bold"
            >
              <dt>공사 기간</dt>
              <dd>{project.constructionDate}</dd>
              <dt>등록일</dt>
              <dd>{registeredDate}</dd>
              <dt>공간 유형</dt>
              <dd>
                {project.spaceType}
              </dd>
              <dt>면적</dt>
              <dd>{project.squareFeet}평</dd>
              <dt className="border-none">시공 범위</dt>
              <dd className="flex flex-wrap gap-2 border-none">
                {project.workType.map((item, index) => (
                  <span
                    className="rounded-4xl bg-wood-10 px-4 py-1"
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </dl>
            <Link href={"/#estimate"}>
              <Button
                variant="ROUNDED"
                className="mt-12 w-full max-w-80 hover:bg-primary"
              >
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
