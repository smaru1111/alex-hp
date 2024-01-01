import { RefObject, useEffect, useState } from 'react'

export const useScrollFixed = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      // cleanup
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return scrolled
}
