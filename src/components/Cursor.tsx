import { useEffect, useRef } from 'react'
import './styles/Cursor.css'

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only on pointer devices
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current!
    const ring = ringRef.current!

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    document.addEventListener('mousemove', onMouseMove)

    let rafId: number
    const loop = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

export default Cursor
