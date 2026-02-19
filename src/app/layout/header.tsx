import Logo from '@/shared/assets/images/logo.png'
import { NAVIGATION_ITEMS, type SectionId } from '@/shared/constants/sectionIds'
import { useEffect, useRef, useState } from 'react'

interface Props {
  activeSection: SectionId | ''
}

function Header({ activeSection }: Props) {
  const [menuTop, setMenuTop] = useState(0)
  const menuRefs = useRef<(HTMLElement | null)[]>([])
  const params = window.location.pathname
  
  useEffect(() => {
    console.log(params)
  })

  //현재 활성화된 섹션의 인덱스를 찾아서 활성화된 메뉴의 높이를 찾는 코드
  useEffect(() => {
    const activeIndex = NAVIGATION_ITEMS.findIndex(
      (items) => items.id === activeSection,
    )

    if (activeIndex !== -1) {
      const currentMenu = menuRefs.current[activeIndex]
      if (currentMenu) {
        setMenuTop(currentMenu?.offsetTop + currentMenu?.offsetHeight)
      }
    } else {
      setMenuTop(0)
    }
  }, [activeSection])

  const handleClick = (id: SectionId) => {
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="flex w-full mt-8 mx-12">
      <div className="flex w-full justify-between">
        <img className="w-[150px] object-cover" src={Logo} alt="Hanvit logo" />
        <div className="flex fixed top-0 right-12 gap-4 z-100">
          <ul className="relative gap-3 pt-8 flex flex-col items-end font-bold">
            {NAVIGATION_ITEMS.map((item, index) => (
              <li
                key={item.id}
                ref={(el: HTMLElement | null) => {
                  menuRefs.current[index] = el
                }}
                onClick={() => handleClick(item.id)}
                className="flex gap-6 items-end"
              >
                <span
                  className={
                    activeSection === item.id
                      ? 'font-extrabold cursor-pointer'
                      : 'font-medium cursor-pointer'
                  }
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative bg-primary w-0.5">
            <div
              className="absolute bg-gold w-0.5 duration-500 left-1/2 transition-all -translate-x-1/2 ease-in-out"
              style={{
                height: `${menuTop}px`,
              }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
