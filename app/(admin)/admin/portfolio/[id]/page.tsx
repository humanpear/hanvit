import PortfolioDetail from "@/components/admin/portfolio/portfolioDetail";
import { getPortfolioProjectId } from "@/lib/supabase/portfolio/server";

async function AdminPortfolioDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getPortfolioProjectId(id);
  if (!project) return;


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
