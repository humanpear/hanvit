import { columns } from "@/components/admin/estimateColumns";
import { DataTable } from "@/components/admin/estimateTable";
import { getAdminEstimate } from "@/lib/supabase/estimate-data";
import { SPACETYPE_BY_ID, Status, WORKTYPE_BY_ID } from "@/types/estimate";

async function AdminEstimate() {
  const data = await getAdminEstimate();
  const formatData = data.map((items) => ({
    ...items,
    address: items.address + " " + items.detailAddress,
    spaceType: SPACETYPE_BY_ID[items.spaceType as keyof typeof SPACETYPE_BY_ID],
    squareFeet: items.squareFeet + '평',
    workType: items.workType.map(
      (items) => WORKTYPE_BY_ID[items as keyof typeof WORKTYPE_BY_ID],
    ),
    status: (items.status && Status[items.status as keyof typeof Status]) ?? "진행 예정"
  }));

  return (
    <div className="flex flex-col grow gap-8 pt-10">
      <span className="container mx-auto font-semibold text-3xl">견적 문의 관리</span>      
      <div className="container mx-auto">
        <DataTable columns={columns} data={formatData} />
      </div>
    </div>
  );
}

export default AdminEstimate;
