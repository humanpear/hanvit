"use client";

import Image from "next/image";
import type { ChangeEvent } from "react";
import Input from "../ui/input";
import Textbox from "../ui/textbox";
import Button from "../ui/button";
import { Address, useKakaoPostcodePopup } from "react-daum-postcode";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import Dropdown from "../ui/dropdown";
import { EstimateMap, EstimateForm, WorkType } from "@/types/estimate";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";

function Estimate() {
  const supabase = createClient();
  const { register, handleSubmit, setValue } = useForm<EstimateForm>();

  const onValid = async (formData: EstimateForm) => {
    const { data, error } = await supabase
      .from("estimate")
      .insert([
        {
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          detailAddress: formData.detailAddress,
          spaceType: formData.spaceType,
          squareFeet: formData.squareFeet,
          contents: formData.contents,
          workType: formData.workType,
        },
      ])

    if (error) {
      console.log("전송 실패:", error.message);
      toast.error("제출 중 오류가 발생했습니다.", {position: "top-center"})
    } else {
      console.log("제출 성공", data)
      toast.success("견적 요청이 완료되었습니다! 👍", {position: "top-center"});
    }
  };

  //썼다가 지웠을때도 순서대로 나오게 하고싶은데..
  const onInValid: SubmitErrorHandler<EstimateForm> = (errors) => {
    const firstErrorField = Object.keys(errors)[0] as
      | keyof EstimateForm
      | undefined;
    if (!firstErrorField) return;

    const firstErrorLabel = EstimateMap[firstErrorField];

    const lastWord = firstErrorLabel.charAt(firstErrorLabel.length - 1);
    const code = (lastWord.charCodeAt(0) - 44032) % 28;
    let josa = "";

    if (code === 0) {
      josa = "를";
    } else {
      josa = "을";
    }

    toast.error(`${EstimateMap[firstErrorField]}${josa} 입력해주세요.`, {
      position: "top-center",
    });
  };

  //카카오 주소검색 팝업
  const openPopup = useKakaoPostcodePopup(
    "//t1.kakaocdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",
  );

  //도로명 주소일 경우 추가 구성
  const handleComplete = (data: Address) => {
    let full = data.address;
    let extra = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extra += data.bname;
      }
      if (data.buildingName !== "") {
        extra += extra !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      full += extra !== "" ? `(${extra})` : "";
    }

    setValue("address", full);

    document.getElementById("detailAddress")?.focus();
  };

  //카카오 팝업에서 onComplete 되면 handleComplete 실행 해주는 듯
  const handleSearchAddress = () => {
    openPopup({ onComplete: handleComplete });
  };

  //연락처 하이픈 자동 삽입
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);

    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    }

    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("phone", formatPhoneNumber(event.target.value), {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <section id="estimate">
      <form
        className="bg-wood-20 py-10 pb-15 md:py-20"
        onSubmit={handleSubmit(onValid, onInValid)}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-[32px] bg-white p-4 shadow-2xl sm:p-6 md:gap-12 md:rounded-[60px] md:p-10">
          <div className="flex flex-col gap-3 px-2 pt-2 md:gap-4 md:pl-20 md:pt-5">
            <p className="text-wood-30 font-bold">견적 문의</p>
            <p className="font-batang text-3xl font-bold sm:text-5xl md:text-5xl">
              견적 문의하기
            </p>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:gap-10">
            <Image
              className="h-64 w-full rounded-[28px] object-cover shadow-lg sm:h-80 md:h-175 md:w-140 md:rounded-[60px] md:shadow-2xl"
              src="/images/contact.jpg"
              alt="contactUsImg"
              width={560}
              height={700}
            />
            <div className="flex w-full flex-col gap-4 bg-white text-sm md:text-base md:h-175">
              <div className="flex gap-4">
                <div className="flex flex-col w-full gap-2">
                  <label className="flex gap-1 font-bold">
                    {EstimateMap.name} <p className="text-red-500">*</p>
                  </label>
                  <Input
                    {...register("name", { required: true })}
                    placeholder="이름을 적어주세요"
                    id="name"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label className="flex gap-1 font-bold">
                    {EstimateMap.phone} <p className="text-red-500">*</p>
                  </label>
                  <Input
                    {...register("phone", {
                      required: true,
                      onChange: handlePhoneChange,
                    })}
                    placeholder="휴대폰 번호를 적어주세요"
                    id="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="flex gap-1 pb-1 font-bold">
                  {EstimateMap.address} <p className="text-red-500">*</p>
                </label>
                <div className="flex">
                  <Input
                    {...register("address", { required: true })}
                    placeholder="주소 검색"
                    readOnly
                  />
                  <Button
                    type="button"
                    onClick={handleSearchAddress}
                    variant={"ESTIMATE"}
                    className="h-10"
                  >
                    주소 검색
                  </Button>
                </div>
                <Input
                  {...register("detailAddress", { required: true })}
                  placeholder="상세 주소를 적어주세요"
                  id="detailAddress"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col w-full gap-2">
                  <label className="flex gap-1 font-bold">
                    {EstimateMap.spaceType} <p className="text-red-500">*</p>
                  </label>
                  <Dropdown {...register("spaceType", { required: true })} />
                </div>
                <div className="relative flex flex-col w-full gap-2">
                  <label className="flex gap-1 font-bold">
                    {EstimateMap.squareFeet} <p className="text-red-500">*</p>
                  </label>
                  <Input
                    {...register("squareFeet", { required: true })}
                    placeholder="공급면적 기준"
                    type="number"
                  />
                  <span className="absolute bottom-0 right-0 pb-2 pr-4">
                    평
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="flex gap-1 font-bold">
                  {EstimateMap.workType} <p className="text-red-500">*</p>
                  <p className="flex font-light text-sm items-center">
                    시공예정 항목을 모두 선택해주세요
                  </p>
                </label>
                <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
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
                        className="flex h-10 items-center justify-center border border-[#7B7B7B] bg-white
                     peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all peer-hover:font-semibold"
                      >
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">{EstimateMap.contents}</label>
                <Textbox
                  {...register("contents")}
                  placeholder="어떤 공간을 리모델링 하고 싶으신가요?"
                />
              </div>

              <Button type="submit" variant="SQUARE">
                문의 보내기
              </Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Estimate;
