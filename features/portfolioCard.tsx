import { portfolioProjects } from "@/lib/portfolio-data";
import Image from "next/image";

function PortfolioCard() {
  return (
    <div className="grid grid-cols-4">
      {portfolioProjects.map((items, index) => (
        <Image
          key={index}
          src={items.photos[0]}
          alt="사진"
          width={300}
          height={200}
          unoptimized
        />
      ))}
    </div>
  );
}

export default PortfolioCard;
