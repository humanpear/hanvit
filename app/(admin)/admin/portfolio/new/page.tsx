"use client";

import PortfolioForm from "@/components/admin/portfolio/portfolioForm";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function PortfolioWrite() {
  const router = useRouter();
  return (
    <div className="flex flex-col grow gap-8 pt-10">
      <span className="container flex items-center gap-3 mx-auto font-semibold text-3xl">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="이전 페이지로 이동"
          className="inline-flex items-center"
        >
          <ChevronLeft size={32} />
        </button>
        포트폴리오 작성
      </span>
      <PortfolioForm mode="new" />
    </div>
  );
}

export default PortfolioWrite;
