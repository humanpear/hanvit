import Image from "next/image";

function Footer() {
  return (
    <footer className="h-50 bg-wood-20 w-full pt-5">
      <div className="bg-wood-10 w-full h-full rounded-t-[60px] pt-15 px-10 shadow-[0px_-10px_15px_-3px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-end pb-6 border-b border-gray-400">
          <div className="w-37.5">
            <Image
              className="object-cover"
              src="/images/logo.png"
              alt="Hanvit logo"
              width={150}
              height={40}
            />
          </div>
          <div className="flex gap-2">
            <a href="https://www.instagram.com/hanvitys" target="_blank">
              <Image
                className="w-8 h-8 cursor-pointer"
                src="/images/instagram.webp"
                alt="Insagram logo"
                width={40}
                height={40}
              />
            </a>
            <a href="https://naver.me/I5yHTqGt" target="_blank">
              <Image
                className="w-8 h-8 cursor-pointer"
                src="/images/naver.svg"
                alt="Naver logo"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col py-2 text-sm">
          <p className="text-start">
            Tel: 031-591-5614&nbsp;&nbsp;|&nbsp;&nbsp;Email:
            interiorhv@naver.com&nbsp;&nbsp;|&nbsp;&nbsp;Address: 경기 남양주시
            화도읍 먹갓원터길 18 한빛인테리어
          </p>
          <p className="text-end font-semibold">
            © 2026 Hanbit Interior Design. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
