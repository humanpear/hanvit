import Image from "next/image";

function Process() {
  const processSteps = [
    {
      id: "1",
      title: "1차 상담",
      description: "공사 일정, 예산, 디자인 등 기본 방향을 설정합니다.",
    },
    {
      id: "2",
      title: "방문 실측",
      description: "현장을 방문해 정확한 실측과 공사 범위를 확인합니다.",
    },
    {
      id: "3",
      title: "예산 산출",
      description: "상담 및 실측 내용을 바탕으로 상세 견적을 제공합니다.",
    },
    {
      id: "4",
      title: "2차 상담",
      description: "견적과 디자인을 조율하며 세부 내용을 확정합니다.",
    },
    {
      id: "5",
      title: "계약 진행",
      description: "최종 견적을 기준으로 계약을 진행합니다.",
    },
    {
      id: "6",
      title: "마감재 선택",
      description: "공정별 자재를 선택하고 디자인을 완성합니다.",
    },
  ];

  return (
    <section id="process">
      <div className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto w-full max-w-7xl rounded-4xl border bg-white px-5 py-10 shadow-sm sm:px-8 md:px-12 md:py-14">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
            <p className="text-sm font-semibold text-wood-30 md:text-base">
              이용안내
            </p>
            <p className="font-batang text-3xl font-bold sm:text-4xl md:text-5xl">
              시공 진행 과정
            </p>
            <p className="text-sm leading-relaxed break-keep md:text-base">
              상담부터 계약, 자재 선택까지 전체 과정을 간단하게 안내드립니다.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 text-sm md:text-base sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-3 ">
            {processSteps.map((step) => (
              <li
                key={step.id}
                className="flex w-full rounded-2xl border border-zinc-200 px-6 py-8 gap-6 transition-all duration-200 hover:border-zinc-300 shadow-sm hover:scale-105"
              >
                <div className="relative w-20 h-20 md:w-25 md:h-25 shrink-0">
                  <Image
                    src={`/icons/process${step.id}.png`}
                    alt={`process${step.id}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center font-semibold text-lg md:text-xl gap-2">
                    <p className="text-wood-30">0{step.id}.</p>
                    <p>{step.title}</p>
                  </div>
                  <p className="mt-3 whitespace-pre-line break-keep leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Process;
