"use client";

import { Button } from "@/components/ui/admin/button";
import { Input } from "@/components/ui/admin/input";
import Dropdown from "@/components/ui/dropdown";
import {
  deleteAdminPortfolio,
  insertAdminPortfolio,
  PortfolioProject,
  updateAdminPortfolio,
} from "@/lib/supabase/portfolio/server";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { CalendarIcon, ImagePlusIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  insertAdminPortfolioImage,
  UploadPortfolioImage,
} from "@/lib/supabase/portfolio/client";
import { WorkType } from "@/types/estimate";
import { MonthPicker } from "@/components/ui/monthpicker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns/format";
import { PortfolioMap } from "@/types/portfolio";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function PortfolioForm({
  mode,
  initialData,
}: {
  mode: "new" | "edit";
  initialData?: PortfolioProject;
}) {
  const { register, handleSubmit, setValue, clearErrors, watch } =
    useForm<PortfolioProject>({
      defaultValues: initialData ?? {
        title: "",
        constructionDate: "",
        spaceType: "",
        squareFeet: "",
        workType: [],
        description: "",
        photos: [],
      },
    });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadImage, setUploadImage] = useState<UploadPortfolioImage[]>(
    initialData?.photos.map((item) => ({ url: item, isNew: false })) || [],
  );
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const constructionDateValue = watch("constructionDate");
  const router = useRouter();

  const selectedDate = constructionDateValue
    ? new Date(`${constructionDateValue}-01`)
    : undefined;

  const handleSelectMonth = (selectedMonth: Date) => {
    setValue("constructionDate", format(selectedMonth, "yyyy-MM"), {
      shouldValidate: true,
      shouldDirty: true,
    });

    clearErrors("constructionDate");
    setIsOpen(false);
  };

  const spanStyle = "min-w-22 py-2";

  const onValid = async (formData: PortfolioProject) => {
    //file 이미지 path주소로 변경
    const result = await insertAdminPortfolioImage(uploadImage);
    if (!result) return;

    const newData = {
      ...formData,
      photos: result,
    };

    if (mode === "new") {
      const finalResult = await insertAdminPortfolio(newData);
      if (finalResult.success) {
        toast.success("성공적으로 등록 됐습니다 👍", {
          position: "top-center",
        });
        setTimeout(() => {
          router.push("/admin/portfolio");
        }, 1000);
      } else {
        toast.error("제출에 실패 했습니다.", {
          position: "top-center",
        });
      }
    } else if (mode === "edit") {
      const finalResult = await updateAdminPortfolio(newData);
      if (finalResult.success) {
        toast.success("성공적으로 수정 됐습니다 👍", {
          position: "top-center",
        });
        setTimeout(() => {
          router.push("/admin/portfolio");
        }, 1000);
      } else {
        toast.error("제출에 실패 했습니다.", {
          position: "top-center",
        });
      }
    }
  };

  const onInValid: SubmitErrorHandler<PortfolioProject> = (errors) => {
    const firstErrorField = Object.keys(errors)[0] as
      | keyof PortfolioProject
      | undefined;
    if (!firstErrorField) return;

    const firstErrorLabel = PortfolioMap[firstErrorField];

    const lastWord = firstErrorLabel.charAt(firstErrorLabel.length - 1);
    const code = (lastWord.charCodeAt(0) - 44032) % 28;
    let josa = "";

    if (code === 0) {
      josa = "를";
    } else {
      josa = "을";
    }

    toast.error(`${PortfolioMap[firstErrorField]}${josa} 입력해주세요.`, {
      position: "top-center",
    });
  };

  //포트폴리오 삭제
  const handleDelete = async () => {
    if (!initialData) return;
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (!isConfirmed) return;
    const result = await deleteAdminPortfolio(initialData.id);
    if (!result) {
      toast.error("삭제에 실패 했습니다.", {
        position: "top-center",
      });
    } else {
      toast.success("성공적으로 삭제 됐습니다", {
        position: "top-center",
      });
      router.push("/admin/portfolio");
    }
  };

  //사진 추가
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (!file) return;
    const fileArray = Array.from(file);

    const newFile = fileArray.map((item) => ({
      url: URL.createObjectURL(item),
      file: item,
      isNew: true,
    }));
    
    setUploadImage((prev) => [...prev, ...newFile]);
  };

  //드래그로 이미지 순서 바꾸기
  const handleDrop = (dropIndex: number) => {
    if (dragIndex === null || dragIndex === dropIndex) return;

    const newSlides = [...uploadImage];

    //드래그 하는 객체를 draggedItem에 저장
    const draggedItem = newSlides[dragIndex];
    //dragIndex에서부터 1개를 제거(드래그하는 요소를 제거)
    newSlides.splice(dragIndex, 1);
    //dropIndex부터 0개를 제거하고 draggedItem을 추가
    newSlides.splice(dropIndex, 0, draggedItem);

    setUploadImage(newSlides);
    setDragIndex(null);
  };

  //사진 삭제
  const handleImageDelete = (index: number) => {
    const newUploadImage = [...uploadImage];
    const filteredImage = newUploadImage.filter((_, i) => i !== index);
    setUploadImage(filteredImage);
  };

  return (
    <form
      className="grid grid-cols-1 gap-5 xl:grid-cols-2 text-sm"
      onSubmit={handleSubmit(onValid, onInValid)}
    >
      <div className="flex flex-col gap-3 border rounded-lg p-5">
        <div className="flex">
          <span className={spanStyle}>제목</span>
          <Input {...register("title", { required: true })} />
        </div>
        <div className="flex">
          <span className={spanStyle}>공사 기간</span>
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant={"outline"}
                className={cn(
                  "w-45 justify-start text-left font-normal",
                  !constructionDateValue && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {constructionDateValue
                  ? constructionDateValue
                  : "날짜를 선택하세요"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="ml-32 p-0">
              <MonthPicker
                onMonthSelect={handleSelectMonth}
                selectedMonth={selectedDate}
              />
            </PopoverContent>
          </Popover>
          <input
            type="hidden"
            {...register("constructionDate", { required: true })}
          />
          {/* 나중에 공사 기간도 추가 */}
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex">
            <span className={spanStyle}>공간 유형</span>
            <Dropdown
              {...register("spaceType", { required: true })}
              className="w-full h-9 rounded-sm border border-primary/20 shadow-xs"
            />
          </div>
          <div className="flex relative">
            <span className="min-w-12 py-2">면적</span>
            <Input
              {...register("squareFeet", { required: true })}
              className="w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
            />
            <span className="absolute right-0 py-2 pr-4">평</span>
          </div>
        </div>
        <div className="flex">
          <span className={spanStyle}>시공 범위</span>
          <div className="grid grid-cols-8 w-full space-x-1">
            {WorkType.map((item) => (
              <label key={item.id} className="cursor-pointer">
                <input
                  type="checkbox"
                  value={item.id}
                  {...register("workType", {
                    validate: (v) =>
                      v?.length > 0 || "시공범위를 선택해 주세요",
                  })}
                  className="sr-only peer"
                />
                <span
                  className="flex py-1 items-center justify-center border rounded-md shadow-sm bg-white text-primary
                                 peer-checked:bg-primary/50 peer-checked:text-white transition-all peer-hover:font-semibold"
                >
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex">
          <span className={spanStyle}>설명</span>
          <textarea
            {...register("description", { required: true })}
            className="w-full h-50 border rounded-md shadow-xs px-3 py-2 resize-none"
          />
        </div>
        {mode === "new" ? (
          <Button type="submit" className="mt-10 w-50 mx-auto cursor-pointer">
            저장하기
          </Button>
        ) : (
          <div className="pt-10 mx-auto space-x-4">
            <Button type="submit" className="w-30 cursor-pointer">
              수정하기
            </Button>
            <Button
              type="button"
              className="w-30 cursor-pointer hover:bg-red-300 bg-red-400"
              onClick={handleDelete}
            >
              삭제하기
            </Button>
          </div>
        )}
      </div>
      <div className="border rounded-lg p-5">
        <span className={spanStyle}>사진</span>
        <div className="flex flex-col items-center gap-10">
          <div className="w-full grid grid-cols-3 gap-4 pt-5">
            {uploadImage.map((item, index) => (
              <div
                key={index}
                draggable
                onDragStart={() => setDragIndex(index)}
                // preventDefault를 하지 않으면 요소 위에 drop할수 없음.
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(index)}
                className="relative w-full aspect-video rounded-lg border overflow-hidden"
              >
                {uploadImage.length > 0 && (
                  <Image
                    src={item.url}
                    width={1000}
                    height={1000}
                    unoptimized
                    alt="@thumbnail"
                    className="object-cover h-auto"
                  />
                )}
                <div className="absolute flex z-10 top-0 left-0 w-full h-full justify-end p-4 items-start gap-10 bg-black/60 opacity-0 hover:opacity-100 transition-all duration-200">
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => handleImageDelete(index)}
                  >
                    <Trash2 className="text-white" />
                  </button>
                </div>
              </div>
            ))}
            <div className="w-full flex items-center justify-center aspect-video border border-primary/50 bg-primary/5 rounded-lg">
              <button
                type="button"
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
              multiple
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default PortfolioForm;
