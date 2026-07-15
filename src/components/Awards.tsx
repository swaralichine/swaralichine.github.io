import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Awards.css'

gsap.registerPlugin(ScrollTrigger)

const awards = [
  {
    icon: '🎓',
    title: 'Subject Matter Expert — IAM, SSO & Covert Copy',
    org: 'Wasabi Technologies',
    desc: 'Recognized as SME in identity and access management, authoring 10+ knowledge base articles and instructional videos for internal teams and the public Wasabi Knowledge Center.',
  },
  {
    icon: '🧭',
    title: 'Mentorship Recognition',
    org: 'Wasabi Technologies',
    desc: 'Mentored 10+ junior and senior engineers on troubleshooting methodology, improving team-wide resolution speed on complex enterprise cases.',
  },
  {
    icon: '☁',
    title: 'AWS Certified — 4x',
    org: 'Amazon Web Services',
    desc: 'Solutions Architect Associate, Developer Associate, AI Practitioner, and Cloud Practitioner.',
  },
]

const Awards = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const awardRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.to(awardRefs.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
    })
  }, [])

  return (
    <section className="awards-section" id="awards" ref={sectionRef}>
      <div className="container">

        <div className="awards-header">
          <span className="section-label">[ Recognition ]</span>
          <h2 className="section-heading">Awards &amp;<br />Recognition</h2>
        </div>

        <div className="awards-grid">
          {awards.map((a, i) => (
            <div
              key={a.title}
              className="award-card"
              ref={el => { if (el) awardRefs.current[i] = el }}
            >
              <span className="award-icon">{a.icon}</span>
              <div className="award-body">
                <span className="award-title">{a.title}</span>
                <span className="award-org">{a.org}</span>
                <p className="award-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Awards
