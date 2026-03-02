"use client";

import Image from "next/image";
import Input from "../ui/input";
import Textbox from "../ui/textbox";
import Button from "../ui/button";
import { Address, useKakaoPostcodePopup } from "react-daum-postcode";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import Dropdown from "../ui/dropdown";
import { ErrorFiledLabel, EstimateForm, WorkType } from "@/types/estimate";
import { toast } from "sonner";

function Estimate() {
  const { register, handleSubmit, setValue } = useForm<EstimateForm>();

  const onValid = (data: EstimateForm) => {
    console.log("최종 제출 데이터 : ", data);
  };

  //썼다가 지웠을때도 순서대로 나오게 하고싶은데..
  const onInValid: SubmitErrorHandler<EstimateForm> = (errors) => {
    const firstErrorField = Object.keys(errors)[0] as keyof EstimateForm | undefined
    if (!firstErrorField) return

    const firstErrorLabel = ErrorFiledLabel[firstErrorField]

    const lastWord = firstErrorLabel.charAt(firstErrorLabel.length-1)
    const code = (lastWord.charCodeAt(0) - 44032) % 28
    let josa = ''

    if (code === 0) {
      josa = '를'
    } else {
      josa = '을'
    }

    toast.error(`${ErrorFiledLabel[firstErrorField]}${josa} 입력해주세요.`, { position: "top-center" })
  }

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

  return (
    <section id="estimate">
      <form
        className="flex bg-wood-20 py-20"
        onSubmit={handleSubmit(onValid, onInValid)}
      >
        <div className="flex flex-col gap-12 bg-white rounded-[60px] w-auto mx-auto p-10 shadow-2xl">
          <div className="flex flex-col pt-5 pl-20 gap-4">
            <p className="text-wood-30 font-bold">견적 문의</p>
            <p className="font-batang text-5xl font-bold">견적 문의하기</p>
          </div>
          <div className="flex gap-10">
            <Image
              className="rounded-[60px] h-175 shadow-2xl"
              src="/images/contact.jpg"
              alt="contactUsImg"
              width={560}
              height={700}
            />
            <div className="flex flex-col bg-white gap-4 w-140 h-175">
              <div className="flex gap-4">
                <div className="flex flex-col w-full gap-2">
                  <label className="flex gap-1 font-bold">
                    고객명 <p className="text-red-500">*</p>
                  </label>
                  <Input
                    {...register("name", {required:true})}
                    placeholder="이름을 적어주세요"
                    id="name"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label className="flex gap-1 font-bold">
                    연락처 <p className="text-red-500">*</p>
                  </label>
                  <Input
                    {...register("phone", {required:true})}
                    placeholder="연락받을 전화번호를 적어주세요"
                    id="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="flex gap-1 pb-1 font-bold">
                  주소 <p className="text-red-500">*</p>
                </label>
                <div className="flex">
                  <Input
                    {...register("address", {required:true})}
                    placeholder="주소 검색"
                    disabled
                  />
                  <Button
                    type="button"
                    onClick={handleSearchAddress}
                    variant={"ESTIMATE"}
                  >
                    주소 검색
                  </Button>
                </div>
                <Input
                  {...register("detailAddress", {required:true})}
                  placeholder="상세 주소를 적어주세요"
                  id="detailAddress"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col w-full gap-2">
                  <label className="flex gap-1 font-bold">
                    공간유형 <p className="text-red-500">*</p>
                  </label>
                  <Dropdown {...register("spaceType", {required:true})} />
                </div>
                <div className="relative flex flex-col w-full gap-2">
                  <label className="flex gap-1 font-bold">
                    평형 <p className="text-red-500">*</p>
                  </label>
                  <Input
                    {...register("squareFeet", {required:true})}
                    placeholder="공급면적 기준"
                  />
                  <span className="absolute bottom-0 right-0 pb-2 pr-4">
                    평
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="flex gap-1 font-bold">
                  시공범위 <p className="text-red-500">*</p>
                  <p className="flex font-light text-sm items-center">
                    시공예정 항목을 모두 선택해주세요
                  </p>
                </label>
                <div className="grid grid-cols-4 gap-1">
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
                        className="flex h-10 items-center justify-center border border-[#7B7B7B] bg-white text-black
                     peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all peer-hover:font-semibold"
                      >
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">문의 내용</label>
                <Textbox
                  {...register("contents")}
                  placeholder="어떤 공간을 리모델링 하고 싶으신가요?"
                />
              </div>

              <Button type="submit" variant="SQUARE" className="">
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
