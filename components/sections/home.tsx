"use client";

import Button from "../ui/button";
import Image from "next/image";

function Home() {
  const handleClick = () => {
    const element = document.getElementById("estimate");
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 pb-24 pt-24 sm:px-6 md:flex-row md:justify-between md:gap-8 md:px-12 md:pb-40 md:pt-30 lg:px-20">
        <div className="flex w-full max-w-xl flex-col gap-8 md:gap-11">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-batang text-4xl font-bold pr-4 sm:text-6xl">자연을 담은</div>
            <div className="font-batang text-4xl font-bold pl-4 italic text-wood-30 sm:text-6xl">
              따뜻한 공간
            </div>
          </div>
          <div className="flex flex-col gap-4 text-sm leading-relaxed sm:gap-5 sm:text-base">
            <p>
              한빛인테리어는 공간에 따뜻한 빛을 담아, 삶을 밝히는 새로운 시작을
              제안합니다.
            </p>
            <p>
              저희는 단순히 집을 꾸미는 일을 넘어, 고객 한 분 한 분의 생활에
              어울리는
              <br />
              ‘하나의 빛’을 찾아내어 공간을 완성합니다.
            </p>
            <p>
              빛처럼 맑고 따뜻하게, 세련된 감각으로 당신의 일상을 디자인합니다.
            </p>
          </div>
          <div className="flex w-full justify-center md:justify-start text-sm sm:text-base">
            <Button onClick={() => handleClick()}>무료 견적 받아보기</Button>
          </div>
        </div>
        <Image
          className="h-auto w-full max-w-lg md:max-w-xl"
          src="/images/main.png"
          alt="mainImg"
          height={500}
          width={550}
        />
      </div>
    </section>
  );
}

export default Home;
