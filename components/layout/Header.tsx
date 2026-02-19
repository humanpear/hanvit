"use client";

import {
  NAVIGATION_ITEMS,
  SECTION_IDS,
  type SectionId,
} from "@/types/sectionIds";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const [menuTop, setMenuTop] = useState(0);
  const menuRefs = useRef<(HTMLElement | null)[]>([]);
  const pathname = usePathname();
  const activeSection = useScrollSpy(SECTION_IDS);
  const router = useRouter()
 
  //현재 활성화된 섹션의 인덱스를 찾아서 활성화된 메뉴의 높이를 찾는 코드
  useEffect(() => {
    const activeIndex = NAVIGATION_ITEMS.findIndex(
      (items) => items.id === activeSection,
    );

    let menuTop = 0;
    if (activeIndex !== -1) {
      const currentMenu = menuRefs.current[activeIndex];
      if (currentMenu) {
        menuTop = currentMenu.offsetTop + currentMenu.offsetHeight;
      }

      setMenuTop((prev) => (prev === menuTop ? prev : menuTop));
    } else {
      setMenuTop(0);
    }
  }, [activeSection]);

  const handleClick = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex w-full mt-8 mx-12">
      <div className="flex w-full justify-between">
        <Image
          className="w-37.5 object-cover cursor-pointer"
          src="/images/logo.png"
          alt="Hanvit logo"
          width={150}
          height={60}
          onClick={() => router.push('/')}
        />
        {pathname === "/" ? (
          <div className="flex fixed top-0 right-12 gap-4 z-100">
            <ul className="relative gap-3 pt-8 flex flex-col items-end font-bold">
              {NAVIGATION_ITEMS.map((item, index) => (
                <li
                  key={item.id}
                  ref={(el: HTMLElement | null) => {
                    menuRefs.current[index] = el;
                  }}
                  onClick={() => handleClick(item.id)}
                  className="flex gap-6 items-end"
                >
                  <span
                    className={
                      activeSection === item.id
                        ? "font-extrabold cursor-pointer"
                        : "font-medium cursor-pointer"
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
        ) : (
          <div className="fixed right-12 top-8">미정</div>
        )}
      </div>
    </header>
  );
}

export default Header;
