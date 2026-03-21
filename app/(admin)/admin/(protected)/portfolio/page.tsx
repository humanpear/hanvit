import { columns } from "@/components/admin/portfolio/portfolioColumns";
import { DataTable } from "@/components/admin/portfolio/portfolioTable";
import { getPortfolioProject } from "@/lib/supabase/portfolio/server";

async function AdminPortfolio() {
  const data = await getPortfolioProject();

  return (
    <div className="flex flex-col grow gap-8 pt-10">
      <span className="container mx-auto font-semibold text-3xl">
        포트폴리오 관리
      </span>
      <div className="container mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default AdminPortfolio;
