import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/WhatIDo.css'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    num: '01',
    title: 'CLOUD OBJECT STORAGE',
    subtitle: 'S3-Compatible Infrastructure at Scale',
    body: 'Supporting enterprise customers on S3-compatible cloud object storage — large-scale data migrations (10+ PB moved across 100+ environments), lifecycle and access policies, and infrastructure built on AWS (EC2, S3, RDS, DynamoDB, Lambda, VPC).',
    tags: ['AWS', 'S3', 'Kubernetes', 'EKS', 'Terraform', 'Docker'],
  },
  {
    num: '02',
    title: 'IDENTITY & ACCESS',
    subtitle: 'SSO, IAM & Enterprise Integration',
    body: 'Subject matter expert in enterprise SSO (SAML/OIDC), IAM, and KMS. Leading live debugging sessions to resolve third-party integration issues with tools like Veeam, Acronis, and Nakivo, and authoring knowledge base content on identity and access patterns.',
    tags: ['SAML', 'OIDC', 'IAM', 'KMS', 'SCIM', 'OAuth 2.0'],
  },
  {
    num: '03',
    title: 'RELIABILITY & OBSERVABILITY',
    subtitle: 'Incident Response & Automation',
    body: 'Running 24/7 on-call rotations and root-cause analysis to hold 99.9%+ availability and SLOs. Building automation for DMCA compliance and ransomware recovery under strict RTO/RPO targets, and internal tooling to streamline support operations.',
    tags: ['Prometheus', 'Grafana', 'ELK', 'Splunk', 'Python', 'CI/CD'],
  },
]

const WhatIDo = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.to(cardRefs.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })
  }, [])

  return (
    <section className="whatido-section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">[ What I Do ]</span>
          <h2 className="section-heading">
            My Areas of<br />Focus
          </h2>
        </div>

        <div className="whatido-cards">
          {cards.map((card, i) => (
            <div
              key={i}
              className="whatido-card"
              ref={el => { if (el) cardRefs.current[i] = el }}
            >
              <div className="card-number">{card.num}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-subtitle">{card.subtitle}</div>
              <p className="card-body">{card.body}</p>
              <div className="card-tags">
                {card.tags.map(tag => (
                  <span key={tag} className="card-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
