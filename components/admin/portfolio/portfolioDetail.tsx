"use client";

import { Button } from "@/components/ui/admin/button";
import PortfolioDetailImage from "@/features/portfolioDetailImage";
import { PortfolioProject } from "@/lib/supabase/portfolio/server";
import { PortfolioMap } from "@/types/portfolio";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function PortfolioDetail({ project }: { project: PortfolioProject }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();

  const detailItems = [
    {
      label: `${PortfolioMap.registeredDate}`,
      value: `${project.registeredDate}`,
    },
    {
      label: `${PortfolioMap.constructionDate}`,
      value: `${project.constructionDate}`,
    },
    { label: `${PortfolioMap.spaceType}`, value: `${project.spaceType}` },
    { label: `${PortfolioMap.squareFeet}`, value: `${project.squareFeet}` },
    { label: `${PortfolioMap.workType}`, value: `${project.workType}` },
  ];

  const handleModalOpen = (index: number) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  return (
    <main className="mx-auto w-full max-w-350 px-6 py-10 lg:px-10">
      <section className="space-y-8">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">{project.title}</h1>

          <div className="rounded-2xl border border-[#eee7e3] bg-[#f8f3f1] px-6 py-5">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {detailItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="font-semibold">{item.label}</span>
                  <span>{item.value}</span>
                  {item.label !== "시공 범위" && (
                    <span className="pl-5">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="max-w-5xl whitespace-pre-line leading-9">
            {project.description}
          </p>
        </div>

        <div className="border-t border-zinc-200 pt-8">
          <div className="columns-2 gap-3 lg:columns-4">
            {project.photos.map((photo, index) => (
              <div
                key={`${photo}-${index}`}
                onClick={() => handleModalOpen(index)}
                className="mb-3 break-inside-avoid cursor-pointer"
              >
                <Image
                  src={photo}
                  alt={`${project.title} 시공 사진 ${index + 1}`}
                  width={300}
                  height={300}
                  unoptimized
                  className="rounded-2xl hover:scale-103 transition-all duration-200 shadow-md"
                />
              </div>
            ))}
            {isOpen === true && (
              <PortfolioDetailImage
                photos={project.photos}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            )}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 pt-6">
          <Button type="button" variant={"outline"} className="px-12 py-4" onClick={() => router.push("/admin/portfolio")}>
            목록으로
          </Button>
          <Button type="button" className="px-12 py-4" onClick={() => router.push(`/admin/portfolio/${project.id}/edit`)}>
            수정하기
          </Button>
        </div>
      </section>
    </main>
  );
}

export default PortfolioDetail;
