import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/WasabiWork.css'

gsap.registerPlugin(ScrollTrigger)

type Project = {
  period: string
  title: string
  desc: string
  detail?: string[]
  tags: string[]
}

const projects: Project[] = [
  {
    period: 'FY26 · Current',
    title: 'Lyve Cloud Enterprise Migration',
    desc: 'Enterprise customers migrating off Seagate Lyve Cloud needed their data moved onto Wasabi with zero loss and minimal downtime, across environments with wildly different scales and access patterns.',
    detail: [
      'Executed the migration of 100+ Lyve Cloud enterprise customer environments, transferring 10+ petabytes of data onto Wasabi while coordinating cutover timing, validating data integrity, and troubleshooting transfer failures in real time.',
    ],
    tags: ['S3', 'Data Migration', 'Lyve Cloud', 'AWS', 'Storage'],
  },
  {
    period: 'FY26 · Current',
    title: 'DMCA & Ransomware Recovery Automation',
    desc: 'DMCA takedown compliance and ransomware recovery both carry hard deadlines: RTO/RPO targets on one side, legal compliance windows on the other. Manual handling didn\'t scale and left too much room for error under pressure.',
    detail: [
      'Developed automation systems for DMCA compliance workflows and led ransomware recovery efforts against strict RTO/RPO targets, reducing manual steps and response time during high-stakes incidents.',
    ],
    tags: ['Automation', 'DMCA', 'Ransomware Recovery', 'RTO/RPO', 'Compliance'],
  },
  {
    period: 'FY26 · Current',
    title: '24/7 On-Call, RCA & Escalation Ownership',
    desc: 'As primary escalation point for enterprise customers, every high-severity incident needs a fast, correct root-cause call — with 99.9%+ availability and SLOs on the line.',
    detail: [
      'Led 24/7 on-call rotations and RCAs, parsing logs via Prometheus, Grafana, and ELK/Splunk to resolve 250+ high-severity production incidents while holding SLOs. Mentored 10+ junior and senior engineers, improving team-wide troubleshooting speed, and partnered globally with Sales, Product, and Development to escalate complex bugs.',
    ],
    tags: ['Prometheus', 'Grafana', 'ELK', 'Splunk', 'Incident Management', 'SLOs'],
  },
  {
    period: 'FY24–FY26',
    title: 'Enterprise SSO, IAM & Third-Party Integration Support',
    desc: 'Enterprise customers connecting third-party backup and recovery tools to Wasabi S3 regularly hit integration friction around identity and access — the kind of issue that needs both protocol depth and patience.',
    detail: [
      'Configured enterprise SSO (SAML/OIDC), IAM, and KMS, and led 500+ live debugging sessions with customers and vendors resolving integration issues with tools like Veeam, Acronis, and Nakivo on S3. Became subject matter expert in IAM, SSO, and Covert Copy, authoring 10+ articles and instructional videos for internal teams and the public Wasabi Knowledge Center.',
    ],
    tags: ['SAML', 'OIDC', 'IAM', 'KMS', 'Veeam', 'Acronis', 'Nakivo'],
  },
  {
    period: 'FY24–FY26',
    title: '"Schedulabi" — Internal Scheduling Automation',
    desc: 'The support team\'s on-call and shift scheduling ran through WhenToWork, a third-party tool that didn\'t fit the team\'s workflow and created manual overhead for 30+ users every week.',
    detail: [
      'Built Schedulabi, an internal workflow automation platform that replaced WhenToWork and streamlined scheduling across the support org. Also built a custom Streamlit dashboard using Pandas to surface support metrics and maximize team efficiency.',
    ],
    tags: ['Python', 'Streamlit', 'Pandas', 'Workflow Automation', 'Internal Tooling'],
  },
]

const WasabiWork = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.to(cardRefs.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.07,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })
  }, [])

  return (
    <section className="wasabi-section" id="wasabi" ref={sectionRef}>
      <div className="container">
        <div className="wasabi-header">
          <div>
            <span className="section-label">[ Wasabi Technologies ]</span>
            <h2 className="section-heading">
              Work at<br />Wasabi.
            </h2>
          </div>
          <div className="wasabi-meta">
            <span className="wasabi-role">Senior Technical Support Engineer</span>
            <span className="wasabi-team">Enterprise Support · Remote</span>
            <span className="wasabi-tenure">Oct 2023 – Present</span>
          </div>
        </div>
        <p className="wasabi-intro">
          Wasabi's enterprise support org owns customer trust for S3-compatible cloud object
          storage at scale. As primary escalation point, I own incident response, identity
          and access integrations, large-scale data migrations, and internal tooling that
          keeps the support team fast.
        </p>

        <div className="wasabi-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="wasabi-card"
              ref={el => { if (el) cardRefs.current[i] = el }}
            >
              <span className="wasabi-period">{p.period}</span>
              <h3 className="wasabi-card-title">{p.title}</h3>
              <p className="wasabi-card-desc">{p.desc}</p>
              {p.detail && p.detail.map((d, i) => (
                <p key={i} className="wasabi-card-desc" style={{ marginTop: '8px' }}>{d}</p>
              ))}
              <div className="wasabi-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="wasabi-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WasabiWork
