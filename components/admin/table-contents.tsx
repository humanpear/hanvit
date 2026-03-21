import { useForm } from "react-hook-form";
import { Button } from "../ui/admin/button";
import { AdminEstimate, updateAdminEstimate } from "@/lib/supabase/estimate/server";
import { toast } from "sonner";

function TableContents({ formData }: { formData: AdminEstimate }) {
  const { register, handleSubmit } = useForm<AdminEstimate>();
  console.log(typeof formData.id)
  
  const onValid = async (data: AdminEstimate) => {
    try {
      await updateAdminEstimate({...data, id: formData.id});
    } catch (error) {
      console.error(error);
    }
    toast.success("저장이 완료되었습니다! 👍", {position: "top-center"})
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(onValid)}>
      <div className="flex grow flex-col gap-2">
        <div className="flex justify-between">
          <div>
            <p>
              <span className="font-semibold">작성 일자 : </span>
              {new Date(formData.created_at).toLocaleString("sv-SE")}
            </p>
            <p>
              <span className="font-semibold">내용 : </span>
              {formData.contents}
            </p>
          </div>
          <select
            {...register("status")}
            defaultValue={formData.status}
            className="bg-white border h-8 rounded-md p-1"
          >
            <option value="pending">진행 예정</option>
            <option value="finished">완료됨</option>
          </select>
        </div>
        <div className="flex gap-1">
          <span className="font-semibold">메모 :</span>
          <textarea
            {...register("memo")}
            placeholder="메모 작성"
            defaultValue={formData.memo}
            className="w-full border h-25 resize-none bg-white rounded-md px-2 py-1"
          ></textarea>
        </div>
        <Button type="submit" variant={"default"} className="w-40 mx-auto cursor-pointer">
          저장
        </Button>
      </div>
    </form>
  );
}

export default TableContents;
