import processImg from '@/../public/images/process.png'

function Process() {
  return (
    <section id="process">
      <div className="py-20">
        <div className="flex flex-col items-center justify-center gap-10 mx-auto bg-white rounded-4xl w-[1330px] h-[700px]">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-wood-30 font-bold">이용 안내</p>
            <p className="font-batang text-5xl font-bold">인테리어 진행 절차</p>
            <p>복잡한 인테리어 과정, 쉽고 투명하게 안내해드립니다.</p>
          </div>
          <img src={processImg} alt="processImg" height={440} width={820} />
        </div>
      </div>
    </section>
  )
}

export default Process
