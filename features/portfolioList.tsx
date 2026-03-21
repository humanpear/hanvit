"use client";

import { spaceFilter } from "@/types/portfolio";
import PortfolioCard from "@/features/portfolioCard";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { PortfolioProject } from "@/lib/supabase/portfolio/server";

function PortfolioMain({
  portfolioProjects,
}: {
  portfolioProjects: PortfolioProject[];
}) {
  const [selectedTag, setSelectedTag] = useState("전체보기");

  const onFilterHandler = (label: string) => {
    setSelectedTag(label);
  };

  const countProjectTag = useMemo(() => {
    return portfolioProjects.reduce<Record<string, number>>(
      (countMap, item) => {
        countMap[item.spaceType] = (countMap[item.spaceType] || 0) + 1;
        return countMap;
      },
      { "전체보기": portfolioProjects.length },
    );
  }, [portfolioProjects]);

  //프로젝트 필터링
  const projects =
    selectedTag === "전체보기"
      ? portfolioProjects
      : portfolioProjects.filter((project) => {
          return project.spaceType === selectedTag;
        });

  return (
    <section
      id="portfolio"
      className="flex w-full flex-col gap-7 pt-20 md:pt-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 text-center md:gap-5">
        <p className="text-wood-30 font-bold">포트폴리오</p>
        <p className="font-batang text-3xl font-bold sm:text-4xl md:text-5xl">
          최근 프로젝트
        </p>
        <p className="text-sm leading-relaxed sm:text-base">
          한빛인테리어가 완성한 공간을 공간 유형별로 확인해 보세요.
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-7xl px-4 flex-wrap justify-center gap-2 md:px-8 sm:gap-3">
        {spaceFilter.map((item) => (
          <button
            className={cn(
              "flex h-8 text-sm md:text-base md:h-10 rounded-4xl px-4 gap-2 bg-wood-20 font-semibold items-center hover:bg-[#d3c6c2] duration-300",
              selectedTag === item.label &&
                "bg-primary text-white hover:bg-primary",
            )}
            key={item.label}
            onClick={() => onFilterHandler(item.label)}
          >
            {item.label}
            <span
              className={cn(
                "px-2 bg-white rounded-4xl pointer-events-none",
                selectedTag === item.label && "bg-[#696969]",
              )}
            >
              {countProjectTag[item.label] ?? 0}
            </span>
          </button>
        ))}
      </div>
      <div className="w-full bg-white px-0 sm:px-2 md:px-6 lg:px-12">
        <PortfolioCard projects={projects} />
      </div>
    </section>
  );
}

export default PortfolioMain;
