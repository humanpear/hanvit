"use client";

import { insertAdminSlider } from "@/lib/supabase/slider/client";
import {
  deleteAdminSlider,
  updateAdminSlider,
  updateAdminSliderChange,
} from "@/lib/supabase/slider/server";
import { SlideItem } from "@/types/slider";
import { ImagePlusIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "../ui/admin/button";
import { toast } from "sonner";

interface Props {
  slides: SlideItem[];
}

function SlideUpload({ slides }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [changeSlides, setChangeSlides] = useState(slides);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  console.log(changeSlides);

  const handleChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;
    toast.promise<{ name: string }>(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "새로운 사진" }), 2000),
        ),
      {
        loading: "로딩중...",
        success: (data) => `${data.name}이 업로드 됐습니다.`,
        error: "Error",
        position: "top-center",
      },
    );

    try {
      const result = await insertAdminSlider(selectedFile);
      if (!result) return;
      const newResult = { ...result, displayOrder: changeSlides.length };
      const updateResult = await updateAdminSlider(newResult);
      if (updateResult) {
        setChangeSlides((prev) => [...prev, updateResult]);
      }
    } catch {
      console.error("사진 추가 실패");
    } finally {
      event.target.value = "";
    }
  };

  const handleSubmit = async () => {
    await updateAdminSliderChange(changeSlides);
    toast.promise<{ name: string }>(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "변경사항" }), 2000),
        ),
      {
        loading: "로딩중...",
        success: (data) => `${data.name}이 저장됐습니다.`,
        error: "Error",
        position: "top-center",
      },
    );
  };

  //드래그로 이미지 순서 바꾸기
  const handleDrop = (dropIndex: number) => {
    if (dragIndex === null) return;
    if (dragIndex === dropIndex) return;

    const newSlides = [...changeSlides];

    //드래그 하는 객체를 draggedItem에 저장
    const draggedItem = newSlides[dragIndex];
    //dragIndex에서부터 1개를 제거(드래그하는 요소를 제거)
    newSlides.splice(dragIndex, 1);
    //dropIndex부터 0개를 제거하고 draggedItem을 추가
    newSlides.splice(dropIndex, 0, draggedItem);

    const finalSlides = newSlides.map((item, index) => {
      return { ...item, displayOrder: index };
    });

    setChangeSlides(finalSlides);
    setDragIndex(null);
  };

  const handleDelete = async (id: string, index: number) => {
    const success = await deleteAdminSlider(id);
    if (success) {
      const newSlides = changeSlides
        .filter((_, i) => i !== index)
        .map((item, index) => ({ ...item, displayOrder: index }));
      setChangeSlides(newSlides);

      await updateAdminSliderChange(newSlides);

      toast.success("삭제가 완료됐습니다.", { position: "top-center" });
    }
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="grid grid-cols-4 gap-4 pt-10">
        {changeSlides.map((item, index) => (
          <div
            key={item.displayOrder}
            draggable
            onDragStart={() => setDragIndex(index)}
            // preventDefault를 하지 않으면 요소 위에 drop할수 없음.
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            className="relative w-full aspect-video rounded-lg border overflow-hidden"
          >
            <Image
              src={item.imageUrl}
              width={1000}
              height={1000}
              unoptimized
              alt="@thumbnail"
              className="object-cover"
            />
            <div className="absolute flex z-10 top-0 left-0 w-full h-full justify-end p-4 items-start gap-10 bg-black/60 opacity-0 hover:opacity-100 transition-all duration-200">
              <button className="cursor-pointer">
                <Trash2
                  className="text-white"
                  onClick={() => handleDelete(item.id, index)}
                />
              </button>
            </div>
          </div>
        ))}
        <div className="w-full flex items-center justify-center aspect-video border border-primary/50 bg-primary/5 rounded-lg">
          <button
            className="cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <ImagePlusIcon className="text-primary/80" />
          </button>
        </div>

        {/* input file */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleChangeFile}
        />
      </div>
      <Button
        type="button"
        onClick={handleSubmit}
        variant={"outline"}
        className="cursor-pointer"
      >
        변경사항 저장
      </Button>
    </div>
  );
}

export default SlideUpload;
