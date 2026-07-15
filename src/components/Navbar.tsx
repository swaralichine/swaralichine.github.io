import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './styles/Navbar.css'

const getLenis = () => window.__lenis

const scrollToSection = (id: string) => {
  const el = document.querySelector(id) as HTMLElement | null
  if (!el) return
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(el, { offset: -80 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const navLinks = [
  { id: '#about',   label: 'About' },
  { id: '#wasabi',  label: 'Wasabi' },
  { id: '#work',    label: 'Projects' },
  { id: '#awards',  label: 'Awards' },
  { id: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    gsap.to(navRef.current, { opacity: 1, duration: 1, delay: 0.4, ease: 'power2.out' })

    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Find which section is currently active based on scroll position.
      // Checks sections in reverse so the last one whose top is above
      // 40% of the viewport wins.
      const threshold = window.scrollY + window.innerHeight * 0.4
      let current = ''
      for (const { id } of navLinks) {
        const el = document.getElementById(id.slice(1))
        if (el && el.offsetTop <= threshold) {
          current = id.slice(1)
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => {
    setMobileOpen(false)
    scrollToSection(id)
  }

  return (
    <nav ref={navRef} className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <button className="navbar-logo" onClick={() => handleNav('#hero')}>SC</button>

          <div className="navbar-right">
            <ul className="navbar-links">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    onClick={() => handleNav(id)}
                    className={activeId === id.slice(1) ? 'active' : ''}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="navbar-resume navbar-resume-desktop"
              href="/resume/Swarali_Chine_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
            <button
              className={`navbar-hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(p => !p)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="navbar-mobile-menu open">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                onClick={() => handleNav(id)}
                className={activeId === id.slice(1) ? 'active' : ''}
              >
                {label}
              </a>
            ))}
            <a
              href="/resume/Swarali_Chine_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
