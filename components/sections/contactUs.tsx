import KakaoMaps from "@/features/kakaoMaps";
import Image from "next/image";
import Link from "next/link";

function ContactUs() {
  return (
    <section id="contactUs">
      <div className="flex flex-col gap-8 bg-white px-4 py-14 sm:px-6 md:py-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-wood-30 font-bold">업체 안내</p>
          <p className="font-batang text-3xl font-bold sm:text-4xl md:text-5xl">
            문의 및 오시는 길
          </p>
          <p className="text-sm leading-relaxed sm:text-base">
            궁금하신 점이 있다면 언제든 편하게 연락주세요.
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-stretch md:justify-center md:gap-8">
          <div className="flex w-full max-w-xl flex-col gap-4">
            <div className="flex w-full text-sm sm:text-base flex-col gap-2 rounded-2xl border-2 border-black/2 bg-white p-6 shadow-lg">
              <div className="flex flex-col gap-2 border-b-wood-20 border-b-2 pb-4">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/icons/phone.svg"
                    alt="전화 아이콘"
                    width={24}
                    height={24}
                  />
                  <p>031-591-5614</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/icons/mail.svg"
                    alt="메일 아이콘"
                    width={24}
                    height={24}
                  />
                  <p>interiorhv@naver.com</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/icons/pin.svg"
                    alt="핀 아이콘"
                    width={24}
                    height={24}
                  />
                  <p className="break-keep">
                    경기 남양주시 화도읍 먹갓원터길 18 한빛인테리어
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-2xl text-sm md:text-base border-2 border-black/2 bg-white px-6 py-8 shadow-lg">
              <Link href={"https://naver.me/I5yHTqGt"} target="_blank">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/naver.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p>네이버 업체 링크</p>
                </div>
              </Link>
              <Link
                href={"https://www.instagram.com/interior_hv"}
                target="_blank"
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/instagram.webp"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p>@hanvitys</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="h-72 w-full max-w-xl overflow-hidden rounded-2xl border-2 border-black/2 p-3 shadow-2xl sm:h-80 md:h-80 lg:h-96">
            <KakaoMaps />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
