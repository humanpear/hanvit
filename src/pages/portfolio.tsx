import Button from '@/shared/ui/button'

function Portfolio() {
  return (
    <div className="flex flex-col gap-7 w-[1100px] mx-auto py-20">
      <p className="text-wood-30 font-bold">포트폴리오</p>
      <p className="font-batang text-5xl font-bold">최근 프로젝트</p>

      <div className="bg-gray-300 h-80">포트폴리오 사진들</div>
      <div className='flex justify-center'>
      <Button>포트폴리오 더보기</Button>
      </div>
    </div>
  )
}

export default Portfolio
