import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-white pt-4">
      <div className="bg-wood-10 min-h-50 w-full rounded-t-[40px] px-4 pt-8 shadow-[0px_-10px_15px_-3px_rgba(0,0,0,0.1)] sm:px-6 md:rounded-t-[60px] md:px-10 md:pt-15">
        <div className="flex gap-4 border-b border-gray-400 pb-6 items-end justify-between">
          <div className="w-25 md:w-37.5">
            <Link href={"/#home"}>
              <Image
                className="object-cover"
                src="/images/logo.svg"
                alt="Hanvit logo"
                width={150}
                height={40}
              />
            </Link>
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
            © 2026 Hanbit Interior Design. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
