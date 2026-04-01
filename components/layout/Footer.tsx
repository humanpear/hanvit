"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  const handleClick = () => {
    const element = document.getElementById("home");
    if (!element) {
      router.push("/");
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-white pt-4">
      <div className="bg-wood-10 min-h-42 w-full h-full rounded-t-[40px] px-4 pt-6 shadow-[0px_-8px_10px_-4px_rgba(0,0,0,0.1)] sm:px-6 md:rounded-t-[60px] md:min-h-50 md:px-10 md:pt-15 ">
        <div className="flex gap-4 border-b border-gray-400 pb-6 items-end justify-between">
          <div className="w-25 md:w-37.5">
            <button onClick={() => handleClick()} className="cursor-pointer">
              <Image
                className="object-cover"
                src="/images/logo.svg"
                alt="Hanvit logo"
                width={150}
                height={40}
              />
            </button>
          </div>
          <div className="flex gap-2">
            <Link
              href={"https://www.instagram.com/interior_hv"}
              target="_blank"
            >
              <Image
                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
                src="/images/instagram.webp"
                alt="Instagram logo"
                width={40}
                height={40}
              />
            </Link>
            <Link href={"https://naver.me/I5yHTqGt"} target="_blank">
              <Image
                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
                src="/images/naver.svg"
                alt="Naver logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 py-3 text-xs sm:text-sm">
          <p className="text-start">
            Tel: 031-591-5614&nbsp;&nbsp;|&nbsp;&nbsp;Email:
            interiorhv@naver.com&nbsp;&nbsp;|&nbsp;&nbsp;Address: 경기 남양주시
            화도읍 먹갓원터길 18 한빛인테리어
          </p>
          <p className="text-start font-semibold sm:text-end">
            © 2026 Hanvit Interior Design. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
