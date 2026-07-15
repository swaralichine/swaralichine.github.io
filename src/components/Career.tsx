import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Career.css'

gsap.registerPlugin(ScrollTrigger)

type Entry = {
  period: string
  title: string
  org: string
  type: 'work' | 'edu'
  desc: string
  meta?: string
  color: string
  initials: string
  logo: string
}

const entries: Entry[] = [
  {
    period: 'Apr 2026 — Present',
    title: 'Senior Technical Support Engineer',
    org: 'Wasabi Technologies · Remote',
    type: 'work',
    desc: 'Primary escalation point for enterprise customers, resolving 3,000+ support cases and 250+ high-severity production incidents. Built DMCA compliance automation and led ransomware recovery within strict RTO/RPO targets. Migrated 100+ Lyve Cloud enterprise environments (10+ PB) onto Wasabi. Ran 24/7 on-call rotations and RCAs via Prometheus, Grafana, and ELK/Splunk to hold 99.9%+ availability, and mentored 10+ engineers.',
    color: '#7AC142',
    initials: 'W',
    logo: '/logos/wasabi.png',
  },
  {
    period: 'Oct 2023 — Mar 2026',
    title: 'Cloud Technical Support Engineer',
    org: 'Wasabi Technologies · Remote',
    type: 'work',
    desc: 'Configured enterprise SSO (SAML/OIDC), IAM, and KMS. Led 500+ live debugging sessions resolving third-party integration issues (Veeam, Acronis, Nakivo) on S3. Became subject matter expert in IAM, SSO, and Covert Copy, authoring 10+ knowledge base articles and instructional videos. Built "Schedulabi," an internal scheduling automation platform replacing WhenToWork for 30+ users, plus a Streamlit/Pandas support-efficiency dashboard.',
    color: '#7AC142',
    initials: 'W',
    logo: '/logos/wasabi.png',
  },
  {
    period: 'Feb 2023 — May 2023',
    title: 'Software Engineer Co-op',
    org: 'Tesla, Inc. · Lathrop, CA',
    type: 'work',
    desc: 'Worked on Spockmap, an internal diagnostic platform. Built Python telemetry ingestion pipelines and Dockerized SQL ETL workflows processing 1M+ battery telemetry records per day, powering factory dashboards used by 50+ engineers.',
    color: '#E82127',
    initials: 'T',
    logo: '/logos/tesla.jpg',
  },
  {
    period: 'May 2022 — Aug 2022',
    title: 'DevOps Engineer Intern',
    org: 'eMetric LLC · San Antonio, TX',
    type: 'work',
    desc: 'Worked on iTester, a K-12 cloud assessment platform. Implemented a bulk file upload feature supporting 500+ submissions through batch processing, contributed to CI/CD pipelines, and assisted with deployment and troubleshooting of microservices on Azure Kubernetes Service.',
    color: '#0057B8',
    initials: 'eM',
    logo: '/logos/emetric.jpeg',
  },
  {
    period: 'Aug 2021 — May 2023',
    title: 'Master of Science — Computer Science',
    org: 'Arizona State University · Tempe, Arizona',
    type: 'edu',
    desc: 'Focus on distributed systems, cloud computing, and information security. Capstone project: an elastic, serverless face-recognition system built on AWS.',
    color: '#8C1D40',
    initials: 'ASU',
    logo: '/logos/asu.webp',
  },
  {
    period: 'Jul 2015 — Jun 2019',
    title: 'Bachelor of Engineering — Electronics & Telecommunications',
    org: 'Pune Institute of Computer Technology · Pune, India',
    type: 'edu',
    desc: 'Foundational coursework in electronics, telecommunications, and computer engineering.',
    color: '#1D4ED8',
    initials: 'PICT',
    logo: '/logos/pict.jpeg',
  },
]

const Career = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const entryRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { height: '0%' },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: true,
        },
      }
    )

    gsap.to(entryRefs.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 65%',
      },
    })
  }, [])

  return (
    <section className="career-section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="career-layout">
          <div className="career-left">
            <span className="section-label">[ Journey ]</span>
            <h2 className="section-heading">
              Career &amp;<br />Education
            </h2>
          </div>

          <div className="career-timeline-wrap">
            <div className="career-timeline-line" ref={lineRef} />

            {entries.map((entry, i) => (
              <div
                key={`${entry.org}-${entry.period}`}
                className={`career-entry career-entry--${entry.type}`}
                ref={el => { if (el) entryRefs.current[i] = el }}
              >
                <div className="career-dot" />
                <div className="career-entry-inner">
                  <div className="career-entry-header">
                    <span className={`career-type-badge career-type-badge--${entry.type}`}>
                      {entry.type === 'work' ? 'Work' : 'Education'}
                    </span>
                    <span className="career-period">{entry.period}</span>
                  </div>
                  <div className="career-role">{entry.title}</div>
                  <div className="career-company-row">
                    <span className="career-org-badge">
                      <img src={entry.logo} alt={`${entry.initials} logo`} />
                    </span>
                    <span className="career-company" style={{ color: entry.color }}>
                      {entry.org}
                    </span>
                  </div>
                  {entry.meta && <span className="career-meta">{entry.meta}</span>}
                  <p className="career-desc">{entry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career
