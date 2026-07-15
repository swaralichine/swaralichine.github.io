import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Education.css'

gsap.registerPlugin(ScrollTrigger)

const schools = [
  {
    name: 'Arizona State University',
    logo: 'ASU',
    degree: 'Master of Science — Computer Science',
    period: 'Aug 2021 – May 2023',
    location: 'Tempe, Arizona',
    courses: [
      'Distributed Systems',
      'Cloud Computing',
      'Information Security',
      'Database Systems',
      'Algorithms',
    ],
  },
  {
    name: 'Pune Institute of Computer Technology',
    logo: 'PICT',
    degree: 'Bachelor of Engineering — Electronics & Telecommunications',
    period: 'Jul 2015 – Jun 2019',
    location: 'Pune, India',
    courses: [
      'Electronics & Communication',
      'Computer Networks',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Software Engineering',
    ],
  },
]

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.to(cardRefs.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 72%',
      },
    })
  }, [])

  return (
    <section className="edu-section" id="education" ref={sectionRef}>
      <div className="container">
        <span className="section-label">[ Education ]</span>
        <h2 className="section-heading">Academic<br />Background</h2>

        <div className="edu-grid">
          {schools.map((s, i) => (
            <div
              key={s.name}
              className="edu-card"
              ref={el => { if (el) cardRefs.current[i] = el }}
            >
              <div className="edu-card-top">
                <div className="edu-logo">{s.logo}</div>
                <div className="edu-meta">
                  <span className="edu-period">{s.period}</span>
                  <span className="edu-location">{s.location}</span>
                </div>
              </div>

              <h3 className="edu-school">{s.name}</h3>
              <p className="edu-degree">{s.degree}</p>

              <div className="edu-courses">
                <span className="edu-courses-label">Relevant Coursework</span>
                <div className="edu-courses-list">
                  {s.courses.map(c => (
                    <span key={c} className="edu-course-tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
