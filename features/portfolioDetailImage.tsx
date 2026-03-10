import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface Props {
  photos: string[];
  isOpen: boolean;
  onClose: () => void;
  selectedImage: number;
  setSelectedImage: React.Dispatch<React.SetStateAction<number>>;
}

function PortfolioDetailImage({
  photos,
  isOpen,
  onClose,
  selectedImage,
  setSelectedImage,
}: Props) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (isOpen === false) return null;

  return (
    <div
      className="flex fixed z-50 inset-0 top-0 left-0 bg-black/70 "
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="포트폴리오 이미지 상세 보기"
        className="flex w-full h-full justify-between items-center p-5"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="이미지 닫기"
          className="fixed top-5 right-5 text-white cursor-pointer"
        >
          <X className="h-8 w-8" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage((prev) => prev - 1);
          }}
          aria-label="이전 이미지"
          disabled={selectedImage === 0}
          className="cursor-pointer disabled:text-primary text-white transition-all duration-75"
        >
          <ChevronLeft className="h-10 w-10" />
        </button>
        <div className="relative flex-1 h-[80vh]">
          <Image
            src={photos[selectedImage]}
            alt={`${selectedImage+1}번째 이미지`}
            unoptimized
            fill
            className="object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage((prev) => prev + 1);
          }}
          aria-label="다음 이미지"
          disabled={selectedImage === photos.length - 1}
          className="cursor-pointer disabled:text-primary text-white transition-all duration-75"
        >
          <ChevronRight className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
}

export default PortfolioDetailImage;
