'use client'

import PortfolioSlider from '@/features/portfolioSlider'
import Button from '../ui/button'
import { useRouter } from 'next/navigation'

function Portfolio() {
  const router = useRouter();

  return (
    <section id="portfolio" className="flex flex-col gap-7 w-screen py-20">
      <div className="flex flex-col gap-7 w-275 mx-auto ">
        <p className="text-wood-30 font-bold">포트폴리오</p>
        <p className="font-batang text-5xl font-bold">최근 프로젝트</p>
      </div>
      <div className="w-full py-10">
        <PortfolioSlider />
      </div>
      <div className="flex justify-center">
        <Button onClick={() => router.push('/portfolio')}>포트폴리오 더보기</Button>
      </div>
    </section>
  )
}

export default Portfolio
