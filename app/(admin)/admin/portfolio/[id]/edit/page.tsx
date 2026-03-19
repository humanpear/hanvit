import PortfolioForm from "@/components/admin/portfolio/portfolioForm";

function PortfolioEdit() {
  return (
    <div className="flex flex-col grow gap-8 pt-10">
      <span className="container mx-auto font-semibold text-3xl">
        포트폴리오 수정
      </span>
      <PortfolioForm />
    </div>
  );
}

export default PortfolioEdit;
