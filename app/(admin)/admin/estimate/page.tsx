import { columns } from "@/components/admin/estimate/estimateColumns";
import { DataTable } from "@/components/admin/estimate/estimateTable";
import { getAdminEstimate } from "@/lib/supabase/estimate/server";

async function AdminEstimate() {
  const data = await getAdminEstimate();  

  return (
    <div className="flex flex-col grow gap-8 pt-10">
      <span className="container mx-auto font-semibold text-3xl">견적 문의 관리</span>      
      <div className="container mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default AdminEstimate;
