"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { portfolioProjects } from "@/lib/portfolio-data";

const ALL_TAB_VALUE = "ALL";
const MAX_VISIBLE_SCOPE_COUNT = 3;

const formatConstructionDate = (constructionDate: string) =>
  constructionDate.replace("-", ".");

function PortfolioMain() {
  const sortedProjects = useMemo(
    () =>
      [...portfolioProjects].sort(
        (a, b) =>
          new Date(b.registeredDate).getTime() -
          new Date(a.registeredDate).getTime(),
      ),
    [],
  );

  const tabItems = useMemo(() => {
    const spaceTypes = Array.from(
      new Set(sortedProjects.map((project) => project.spaceType)),
    );

    return [
      { value: ALL_TAB_VALUE, label: "전체보기", count: sortedProjects.length },
      ...spaceTypes.map((spaceType) => ({
        value: spaceType,
        label: spaceType,
        count: sortedProjects.filter((project) => project.spaceType === spaceType)
          .length,
      })),
    ];
  }, [sortedProjects]);

  const [activeTab, setActiveTab] = useState<string>(ALL_TAB_VALUE);

  const filteredProjects = useMemo(() => {
    if (activeTab === ALL_TAB_VALUE) {
      return sortedProjects;
    }

    return sortedProjects.filter((project) => project.spaceType === activeTab);
  }, [activeTab, sortedProjects]);

  return (
    <section id="portfolio" className="min-h-screen pb-24 pt-20">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 xl:px-12">
        <header className="mb-10 flex flex-col justify-center items-center gap-4 md:mb-12">
          <p className="text-sm font-bold tracking-[0.2em] text-wood-30">
            포트폴리오
          </p>
          <h1 className="font-batang text-4xl font-bold leading-tight md:text-5xl">
            최근 프로젝트
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-primary/80 md:text-base">
            한빛인테리어가 완성한 공간을 공간 유형별로 확인해 보세요.
          </p>
        </header>

        <nav aria-label="공간 유형 필터" className="mb-8 flex flex-wrap gap-3 md:mb-10">
          {tabItems.map((tabItem) => {
            const isActive = activeTab === tabItem.value;

            return (
              <button
                key={tabItem.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTab(tabItem.value)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-wood-20 text-primary hover:bg-wood-30/30"
                }`}
              >
                <span>{tabItem.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    isActive ? "bg-white/20 text-white" : "bg-white text-primary/80"
                  }`}
                >
                  {tabItem.count}
                </span>
              </button>
            );
          })}
        </nav>

        {filteredProjects.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-wood-30/30 bg-white/70 px-6 py-20 text-center">
            <p className="font-batang text-2xl font-bold">
              아직 등록된 프로젝트가 없습니다.
            </p>
            <p className="mt-2 text-sm text-primary/70">
              다른 공간 유형을 선택해 확인해 주세요.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:gap-6 xl:grid-cols-3">
            {filteredProjects.map((project) => {
              const visibleScopes = project.constructionScope.slice(
                0,
                MAX_VISIBLE_SCOPE_COUNT,
              );
              const hiddenScopeCount =
                project.constructionScope.length - visibleScopes.length;

              return (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-3xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_20px_34px_rgba(0,0,0,0.14)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      src={project.photos[0]}
                      alt={`${project.title} 대표 이미지`}
                      fill
                      sizes="(min-width: 1280px) 33vw, 50vw"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col gap-3 p-4 md:p-5">
                    <div className="flex flex-col gap-1">
                      <h2 className="truncate text-base font-bold md:text-lg">
                        {project.title}
                      </h2>
                      <p className="text-xs text-primary/70 md:text-sm">
                        {project.spaceType} · {project.floorPlan} ·{" "}
                        {formatConstructionDate(project.constructionDate)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {visibleScopes.map((scope) => (
                        <span
                          key={`${project.id}-${scope}`}
                          className="rounded-full bg-wood-10 px-3 py-1 text-xs font-medium text-primary/80 md:text-sm"
                        >
                          {scope}
                        </span>
                      ))}
                      {hiddenScopeCount > 0 && (
                        <span className="rounded-full bg-wood-20 px-3 py-1 text-xs font-semibold text-primary/70 md:text-sm">
                          +{hiddenScopeCount}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default PortfolioMain;
