import contactUsImg from '@/../public/images/contact.jpg'
import Button from '@/shared/ui/button'
import Textbox from '@/shared/ui/textbox'

function ContactUs() {
  return (
    <div className='flex bg-wood-20 py-20'>
      <div className="flex gap-12 w-auto mx-auto">
        <img
          className="rounded-[60px] h-[700px] shadow-2xl"
          src={contactUsImg}
          alt="contactUsImg"
          width={560}
        />
        <div className="flex flex-col bg-white rounded-[60px] p-15 gap-6 w-[560px] h-[700px] shadow-2xl">
          <p className="text-wood-30 font-bold">견적 문의</p>
          <p className="font-batang text-5xl font-bold">견적 문의하기</p>
          <div>
            <p className="text-wood-30 font-bold">견적 문의</p>
            <Textbox></Textbox>
          </div>
          <div>
            <p className="text-wood-30 font-bold">견적 문의</p>
            <Textbox></Textbox>
          </div>
          <div>
            <p className="text-wood-30 font-bold">견적 문의</p>
            <Textbox></Textbox>
          </div>
          <Button variant="SQUARE">문의 보내기</Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
