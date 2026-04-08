"use client";

import Image from "next/image";
import { useState } from "react";
import PortfolioDetailImage from "./portfolioDetailImage";

function PortfolioDetailGallary({ photos }: { photos: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleModalOpen = (index: number) => {
    setSelectedImage(index)
    setIsOpen(true)
  }

  return (
    <div className="pt-6 mx-auto columns-2 lg:columns-3 gap-3">
      {photos.map((item, index) => (
        <div
          key={index}
          onClick={() => handleModalOpen(index)}
          className="mb-3 break-inside-avoid cursor-pointer"
        >
          <Image
            src={item}
            alt="사진"
            width={300}
            height={300}
            unoptimized
            className="rounded-2xl hover:scale-103 transition-all duration-200 shadow-md"
          />
        </div>
      ))}
      
      {isOpen === true && (
        <PortfolioDetailImage
          photos={photos}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default PortfolioDetailGallary;
