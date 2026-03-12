import PortfolioMain from "@/features/portfolioList";
import { getPortfolioProject } from "@/lib/supabase/portfolio-data";

async function Portfolio() {
  const portfolioProjects = await getPortfolioProject()

  return (
    <PortfolioMain portfolioProjects={portfolioProjects}></PortfolioMain>
  );
}

export default Portfolio;
