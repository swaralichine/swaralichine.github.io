import { useEffect, useRef, useState } from 'react'
import './styles/ScrollProgress.css'

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? (scrolled / total) * 100 : 0

      if (barRef.current) {
        barRef.current.style.width = `${pct}%`
      }
      setShowTop(scrolled > 500)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleBackToTop = () => {
    const lenis = window.__lenis
    if (lenis) {
      lenis.scrollTo(0)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="scroll-progress-bar" ref={barRef} />
      <button
        className={`back-to-top${showTop ? ' visible' : ''}`}
        onClick={handleBackToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  )
}

export default ScrollProgress
