"use client";

import Image from "next/image";
import { useState } from "react";
import Input from "../ui/input";
import Textbox from "../ui/textbox";
import Button from "../ui/button";

function ContactUs() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!name) {
      alert("이름을 적어주세요");
    } else if (!phoneNumber) {
      alert("연락처를 적어주세요");
    } else if (!content) {
      alert("문의 내용을 적어주세요");
    } else {
      console.log("결과", name, phoneNumber, content);
      alert(`이름: ${name}\n연락처: ${phoneNumber}\n내용: ${content}`);
    }
  };

  return (
    <section id="contactUs">
      <div className="flex bg-wood-20 py-20">
        <div className="flex gap-12 w-auto mx-auto">
          <Image
            className="rounded-[60px] h-175 shadow-2xl"
            src="/images/contact.jpg"
            alt="contactUsImg"
            width={560}
            height={700}
          />
          <div className="flex flex-col bg-white rounded-[60px] p-15 gap-6 w-140 h-175 shadow-2xl">
            <p className="text-wood-30 font-bold">견적 문의</p>
            <p className="font-batang text-5xl font-bold">견적 문의하기</p>
            <div className="flex flex-col gap-2">
              <p className="text-wood-30 font-bold">이름</p>
              <Input
                placeholder="이름을 적어주세요"
                value={name}
                onChange={setName}
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-wood-30 font-bold">연락처</p>
              <Input
                placeholder="연락받을 전화번호를 적어주세요"
                value={phoneNumber}
                onChange={setPhoneNumber}
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-wood-30 font-bold">문의 내용</p>
              <Textbox
                placeholder="어떤 공간을 리모델링 하고 싶으신가요?"
                value={content}
                onChange={setContent}
              ></Textbox>
            </div>
            <Button variant="SQUARE" onClick={handleSubmit}>
              문의 보내기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
