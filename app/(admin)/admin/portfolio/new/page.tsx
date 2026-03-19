import PortfolioForm from "@/components/admin/portfolio/portfolioForm";

function PortfolioWrite() {
  return (
    <div className="flex flex-col grow gap-8 pt-10">
      <span className="container mx-auto font-semibold text-3xl">
        포트폴리오 작성
      </span>
      <PortfolioForm />
    </div>
  );
}

export default PortfolioWrite;
