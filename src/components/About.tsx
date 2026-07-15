import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/About.css'

gsap.registerPlugin(ScrollTrigger)

const headingWords = 'Cloud & AI Engineer specializing in AWS, security, and Generative AI.'.split(' ')

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const wordRefs = useRef<HTMLSpanElement[]>([])
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const words = wordRefs.current.filter(Boolean)

    gsap.fromTo(
      words,
      { y: '100%' },
      {
        y: '0%',
        duration: 0.8,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    )

    gsap.fromTo(
      rightRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    )
  }, [])

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* Left column */}
          <div>
            <div className="about-label">[ About Me ]</div>
            <h2 className="about-heading">
              {headingWords.map((word, i) => (
                <span key={i} className="word">
                  <span ref={el => { if (el) wordRefs.current[i] = el }}>{word}</span>
                </span>
              ))}
            </h2>
          </div>

          {/* Right column */}
          <div ref={rightRef} style={{ opacity: 0 }}>
            <p className="about-para">
              I'm a Senior Technical Support Engineer at Wasabi Technologies, specializing
              in S3-compatible cloud object storage and enterprise cloud solutions. I serve
              as a primary escalation point for high-severity production incidents, with
              expertise across identity and access management (SAML, OIDC, SSO, IAM, KMS),
              cloud security, and observability platforms including Prometheus, Grafana,
              ELK, and Splunk. I hold four AWS certifications and an MS in Computer Science
              from Arizona State University, with prior software engineering experience at
              Tesla and eMetric. I'm passionate about building intelligent cloud automation
              tools that improve reliability, security, and operational efficiency.
            </p>
            <div className="about-currently">
              <span className="about-currently-label">↳ Currently</span>
              <span className="about-currently-text">
                Building intelligent cloud automation solutions at the intersection of AWS,
                security, and Generative AI.
              </span>
            </div>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-num">3+</span>
                <span className="about-stat-label">Years Exp</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">3,000+</span>
                <span className="about-stat-label">Cases Resolved</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">4</span>
                <span className="about-stat-label">AWS Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
