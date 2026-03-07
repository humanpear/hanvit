"use client";

import { spaceFilter } from "@/types/portfolio";
import PortfolioCard from "@/features/portfolioCard";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { portfolioProjects } from "@/lib/portfolio-data";


const countProjectTag = portfolioProjects.reduce<Record<string, number>>(
  (countMap, item) => {
    countMap[item.spaceType] = (countMap[item.spaceType] || 0) + 1;
    return countMap;
  },
  { all: portfolioProjects.length },
);

function PortfolioMain() {
  const [selectedTag, setSelectedTag] = useState("all");

  const onFilterHandler = (id: string) => {
    setSelectedTag(id);
  };

  //프로젝트 필터링
  const projects =
    selectedTag === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) => {
          return project.spaceType === selectedTag;
        });

  return (
    <section id="portfolio" className="flex flex-col gap-7 w-screen pt-10">
      <div className="flex flex-col gap-5 mx-auto items-center">
        <p className="text-wood-30 font-bold">포트폴리오</p>
        <p className="font-batang text-5xl font-bold">최근 프로젝트</p>
        <p>한빛인테리어가 완성한 공간을 공간 유형별로 확인해 보세요.</p>
      </div>
      <div className="flex mx-auto gap-3">
        {spaceFilter.map((item) => (
            <button
              className={cn(
                "flex h-10 rounded-4xl px-4 gap-2 bg-wood-20 font-semibold items-center hover:bg-[#d3c6c2] duration-300",
                selectedTag === item.id && "bg-primary text-white hover:bg-primary",
              )}
              key={item.id}
              onClick={() => onFilterHandler(item.id)}
            >
              {item.label}
              <span
                className={cn(
                  "px-2 bg-white rounded-4xl pointer-events-none",
                  selectedTag === item.id && "bg-[#696969]",
                )}
              >
                {countProjectTag[item.id] ?? 0}
              </span>
            </button>          
        ))}
      </div>
      <div className="w-full bg-white">
        <PortfolioCard projects={projects} />
      </div>
    </section>
  );
}

export default PortfolioMain;
