
import PortfolioSlider from '@/features/portfolio/portfolioSlider'
import Button from '@/shared/ui/button'

function Portfolio() {
  const onClick = () => {
    alert('포트폴리오로 이동')
  }
  return (
    <section id="portfolio" className="flex flex-col gap-7 w-screen py-20">
      <div className="flex flex-col gap-7 w-[1100px] mx-auto ">
        <p className="text-wood-30 font-bold">포트폴리오</p>
        <p className="font-batang text-5xl font-bold">최근 프로젝트</p>
      </div>
      <div className='w-full'>
        <PortfolioSlider />
      </div>
      <div className="flex justify-center">
        <Button onClick={onClick}>포트폴리오 더보기</Button>
      </div>
    </section>
  )
}

export default Portfolio
