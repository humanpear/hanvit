"use client";
import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const listStyle = (menu: string) =>
    `flex w-full h-12.5 items-center gap-3 text-sm ${pathname !== menu && "hover:bg-wood-30/15"} hover:font-bold rounded-xl px-6 py-4 cursor-pointer ${pathname === menu && "bg-white"} transition-all duration-300`;

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut({
      scope: "local",
    });

    if (error) {
      console.error("로그아웃 실패", error.message);
      return;
    }

    router.push("/admin/signin");
    router.refresh();
  };

  return (
    <div className="fixed left-0 top-0 flex flex-col w-60 h-screen bg-wood-10 p-3">
      <div className="flex flex-col gap-2 px-5 pt-5 pb-16">
        <div className="text-wood-30 font-semibold text-sm">한빛인테리어</div>
        <div className="font-bold text-3xl font-batang">관리 콘솔</div>
      </div>
      <ul className="flex flex-col gap-2">
        <li>
          <button
            className={listStyle("/admin/estimate")}
            onClick={() => router.push("/admin/estimate")}
          >
            <Image
              src="/icons/estimate.svg"
              alt="estimate"
              width={22}
              height={22}
            />
            <div className="font-semibold hover:font-bold">견적 문의 관리</div>
          </button>
        </li>
        <li>
          <button
            className={listStyle("/admin/slider")}
            onClick={() => router.push("/admin/slider")}
          >
            <Image
              src="/icons/slider.svg"
              alt="slider"
              width={22}
              height={22}
              style={{ width: "22px", height: "24px" }}
            />
            <div className="font-semibold hover:font-bold">
              슬라이드 이미지 관리
            </div>
          </button>
        </li>
        <li>
          <button
            className={listStyle("/admin/portfolio")}
            onClick={() => router.push("/admin/portfolio")}
          >
            <Image
              src="/icons/portfolio.svg"
              alt="portfolio"
              width={22}
              height={22}
              style={{ width: "22px", height: "24px" }}
            />
            <div className="font-semibold hover:font-bold">포트폴리오 관리</div>
          </button>
        </li>
        {/* 설정 탭은 추후에 개발 */}
        {/* <li>
          <button
            id="setting"
            className={listStyle("/admin/setting")}
            onClick={() => router.push("/admin/setting")}
          >
            <Image
              src="/icons/setting.svg"
              alt="setting"
              width={22}
              height={22}
              style={{ width: "22px", height: "24px" }}
            />
            <div className="font-semibold hover:font-bold">설정</div>
          </button>
        </li> */}
        <li>
          <button
            id="logout"
            className={listStyle("/admin/setting")}
            onClick={handleLogout}
          >
            <LogOut size={20} className="ml-0.5"/>
            <div className="font-semibold hover:font-bold">로그아웃</div>
          </button>
        </li>
      </ul>    
    </div>
  );
}

export default Sidebar;
