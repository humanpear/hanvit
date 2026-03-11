import Image from "next/image";

function Process() {
  return (
    <section id="process">
      <div className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 rounded-4xl bg-white px-4 py-8 sm:px-8 md:gap-10 md:py-12">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-wood-30 font-bold">이용 안내</p>
            <p className="font-batang text-3xl font-bold sm:text-4xl md:text-5xl">인테리어 진행 절차</p>
            <p className="text-center text-sm leading-relaxed sm:text-base">복잡한 인테리어 과정, 쉽고 투명하게 안내해드립니다.</p>
          </div>
          <Image
            className="h-auto w-full max-w-4xl"
            src="/images/process.png"
            alt="processImg"
            height={440}
            width={820}
          />
        </div>
      </div>
    </section>
  );
}

export default Process;
