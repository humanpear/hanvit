import SlideUpload from "@/components/admin/slideUpload";
import { getPortfolioSlider } from "@/lib/supabase/slider/server";

async function AdminSlider() {
  const slides = await getPortfolioSlider();

  return (
    <div className="flex flex-col grow gap-8 pt-10">
      <span className="container mx-auto font-semibold text-3xl">
        슬라이드 이미지 관리
      </span>
      <SlideUpload slides={slides} />
    </div>
  );
}

export default AdminSlider;
