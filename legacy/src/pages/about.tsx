import aboutImg from '@/../public/images/about.png'

function About() {
  return (
    <section id="about">
      <div className="py-20 bg-white">
        <div className="flex justify-center items-center gap-11 bg-white rounded-t-4xl h-125">
          <img src={aboutImg} alt="aboutImg" height={320} width={620} />
          <div className="flex flex-col gap-8">
            <p className="text-wood-30 font-bold">회사 소개</p>
            <p className="font-batang text-5xl font-bold">
              공간에 숨결을 불어넣다
            </p>
            <div className="flex flex-col gap-5">
              <p>
                “한빛”이라는 이름은 삶을 비추는 하나의 빛에서 시작되었습니다.
              </p>
              <p>
                공간을 바꾸는 일은 단순한 인테리어를 넘어, 새로운 삶을 여는
                첫걸음이라 생각합니다.
                <br />
                그래서 저희는 고객 한 분, 한 공간에 어울리는 단 하나의 빛을
                찾아내고자 합니다.
              </p>
              <p>
                빛은 공간의 분위기를 결정짓고, 따뜻한 감정을 불어넣습니다.
                <br />
                저희 한빛인테리어는 이 빛처럼 맑고 따뜻하게, 세련되고 균형 잡힌
                감각으로 공간을 완성합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
