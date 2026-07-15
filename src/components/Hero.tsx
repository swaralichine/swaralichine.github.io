import { useEffect, useRef } from 'react'
import Marquee from 'react-fast-marquee'
import gsap from 'gsap'
import './styles/Hero.css'

const marqueeItems = [
  'SENIOR TECHNICAL SUPPORT ENGINEER',
  'CLOUD OBJECT STORAGE',
  'IAM · SSO · SAML · OIDC',
  'KUBERNETES',
  'OBSERVABILITY',
  'AUTOMATION',
  'S3-COMPATIBLE',
  'RELIABILITY',
]

const scrollToSection = (id: string) => {
  const el = document.querySelector(id) as HTMLElement | null
  if (!el) return
  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(el, { offset: -80 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const Hero = () => {
  const nameRefs = useRef<HTMLSpanElement[]>([])
  const subtitleRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.to(nameRefs.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.12,
    })
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .to(buttonsRef.current, { opacity: 1, scale: 1, duration: 0.6 }, '-=0.4')
      .to(marqueeRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />

      <div className="container hero-content">
        <div className="hero-name-block">
          <span className="hero-name-line">
            <span
              className="hero-name"
              ref={el => { if (el) nameRefs.current[0] = el }}
            >
              SWARALI
            </span>
          </span>
          <span className="hero-name-line">
            <span
              className="hero-name"
              ref={el => { if (el) nameRefs.current[1] = el }}
            >
              CHINE
            </span>
          </span>
        </div>

        <div className="hero-subtitle" ref={subtitleRef} style={{ transform: 'translateY(20px)' }}>
          <span className="hero-subtitle-role">Senior Technical Support Engineer</span>
          <span className="hero-subtitle-sep" />
          <span className="hero-subtitle-company">Wasabi Technologies</span>
        </div>

        <p className="hero-tagline" ref={taglineRef} style={{ transform: 'translateY(20px)' }}>
          Turning complex cloud challenges into secure, scalable solutions.
        </p>

        <div
          className="hero-buttons"
          ref={buttonsRef}
          style={{ transform: 'scale(0.9)' }}
        >
          <button
            className="hero-btn-primary"
            onClick={() => scrollToSection('#wasabi')}
          >
            View Work ↓
          </button>
          <button
            className="hero-btn-secondary"
            onClick={() => scrollToSection('#contact')}
          >
            Get in Touch →
          </button>
          <a
            className="hero-btn-resume"
            href="/resume/Swarali_Chine_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </div>

      <div className="hero-marquee-wrap" ref={marqueeRef} style={{ transform: 'translateY(20px)' }}>
        <Marquee speed={40} gradient={false}>
          {marqueeItems.map((item) => (
            <span key={item} className="hero-marquee-item">
              {item}
              <span className="hero-marquee-dot" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Hero
