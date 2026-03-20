import PortfolioForm from "@/components/admin/portfolio/portfolioForm";
import { getPortfolioEditId } from "@/lib/supabase/portfolio/server";
import { notFound } from "next/navigation";

async function PortfolioEdit({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getPortfolioEditId(id);
  if (!project) notFound();

  return (
    <div className="flex flex-col grow gap-8 pt-10">
      <span className="container mx-auto font-semibold text-3xl">
        포트폴리오 수정
      </span>
      <PortfolioForm mode="edit" initialData={project} />
    </div>
  );
}

export default PortfolioEdit;
