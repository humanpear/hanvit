import Logo from '@/shared/assets/images/logo.png'
import { SECTION_IDS, SectionId } from '@/shared/constants/sections'
import { motion } from 'motion/react'

type HeaderProps = {
  activeSection: SectionId
}

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: '홈' },
  { id: 'about', label: '회사 소개' },
  { id: 'portfolio', label: '포트폴리오' },
  { id: 'process', label: '이용 안내' },
  { id: 'contactUs', label: '견적 문의' },
]

function Header({ activeSection }: HeaderProps) {
  const activeIndex = SECTION_IDS.indexOf(activeSection)
  const progress =
    activeIndex >= 0 ? (activeIndex + 1) / SECTION_IDS.length : 0

  return (
    <header className="flex w-full mt-8 mx-12">
      <div className="flex w-full justify-between">
        <img className="w-[150px] h-10" src={Logo} alt="Hanvit logo" />
        <div className="flex fixed top-8 right-12 items-stretch gap-4">
          <motion.div
            className="w-0.5 bg-blue-500 origin-top rounded-full"
            animate={{ scaleY: progress }}
            initial={false}
            transition={{ type: 'spring', stiffness: 160, damping: 22 }}
          />
          <ul className="flex flex-col gap-4 text-right font-bold">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className={item.id === activeSection ? 'text-primary' : ''}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-primary rounded-bl-[8rem] w-80% h-100%" />
    </header>
  )
}

export default Header
