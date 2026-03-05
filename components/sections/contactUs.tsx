import Image from "next/image";

function ContactUs() {
  return (
    <section id="contactUs">
      <div className="flex flex-col gap-8 py-20 bg-white">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-wood-30 font-bold">업체 안내</p>
          <p className="font-batang text-5xl font-bold">문의 및 오시는 길</p>
          <p>궁금하신 점이 있다면 언제든 편하게 연락주세요.</p>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 rounded-2xl bg-white p-6 w-100 shadow-lg">
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
                  <p>경기 남양주시 화도읍 먹갓원터길 18 한빛인테리어</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 w-100 shadow-lg">
              <div className="flex gap-2 items-center">
                <Image
                  src="/images/naver.svg"
                  alt="네이버"
                  width={24}
                  height={24}
                />
                <p>네이버 업체 링크</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/images/instagram.webp"
                  alt="인스타그램"
                  width={24}
                  height={24}
                />
                <p>@hanvitys</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl">
            <div className="bg-primary rounded-2xl w-100 h-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
