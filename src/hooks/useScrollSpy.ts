import { useEffect, useState } from "react"

export function useScrollSpy<T extends string>(sectionIds: T[]): T | '' {
  const [activeId, setActiveId] = useState<T | ''>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id as T)
          }
        })
      },
      { threshold: 0.4 }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
