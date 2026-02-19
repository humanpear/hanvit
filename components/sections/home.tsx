"use client";

import Button from "../ui/button";
import Image from "next/image";

function Home() {
  const handleClick = () => {
    const element = document.getElementById("contactUs");
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home">
      <div className="flex justify-center items-center pt-20 pb-40 gap-8">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col">
            <div className="text-6xl font-batang font-bold">자연을 담은</div>
            <div className="text-6xl font-batang font-bold italic text-wood-30">
              따뜻한 공간
            </div>
          </div>
          <div className="flex flex-col gap-5">
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
          <Button onClick={() => handleClick()}>무료 견적 받아보기</Button>
        </div>
        <Image src="/images/main.png" alt="mainImg" height={500} width={550} />
      </div>
    </section>
  );
}

export default Home;
