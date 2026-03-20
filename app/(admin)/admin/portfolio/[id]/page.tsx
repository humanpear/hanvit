import PortfolioDetail from "@/components/admin/portfolio/portfolioDetail";
import { getPortfolioProjectId } from "@/lib/supabase/portfolio/server";
import { notFound } from "next/navigation";

async function AdminPortfolioDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getPortfolioProjectId(id);
  if (!project) notFound();


  return (
    <div className="flex flex-col grow gap-8 pt-10">
      <span className="container mx-auto font-semibold text-3xl">
        포트폴리오 관리
      </span>
      <PortfolioDetail project={project} />
    </div>
  );
}

export default AdminPortfolioDetail;
