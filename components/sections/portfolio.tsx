'use client'

import PortfolioSlider from '@/features/portfolioSlider'
import Button from '../ui/button'
import { useRouter } from 'next/navigation'

function Portfolio() {
  const router = useRouter();

  return (
    <section id="portfolio" className="flex w-full flex-col gap-7 py-12 md:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 sm:px-6 md:gap-7">
        <p className="text-wood-30 font-bold">포트폴리오</p>
        <p className="font-batang text-3xl font-bold sm:text-4xl md:text-5xl">최근 프로젝트</p>
      </div>
      <div className="w-full py-6 md:py-10">
        <PortfolioSlider />
      </div>
      <div className="flex justify-center">
        <Button onClick={() => router.push('/portfolio')}>포트폴리오 더보기</Button>
      </div>
    </section>
  );
}

export default Portfolio;
