import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Work.css'

gsap.registerPlugin(ScrollTrigger)

type Project = {
  num: string
  title: string
  sub: string
  tools: string
  link: string
  tag: string
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Wasabi S3 MCP Connector Exploration',
    sub: 'Personal Deep-Dive · via Claude',
    tools: 'Wasabi S3 MCP · Object Lock · Presigned URLs · IAM/STS',
    link: '#',
    tag: 'AI',
  },
  {
    num: '02',
    title: 'AWS Face Recognition as a Service',
    sub: 'Cloud Computing Course Project · Arizona State University',
    tools: 'AWS S3 · SQS · EC2 · CNN · Deep Learning',
    link: '#',
    tag: '',
  },
  {
    num: '03',
    title: 'Real-Time Face Recognition (Serverless)',
    sub: 'Cloud Computing Course Project · Arizona State University',
    tools: 'Raspberry Pi · AWS Lambda · Serverless',
    link: '#',
    tag: '',
  },
]

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const rowRefs = useRef<HTMLAnchorElement[]>([])

  useEffect(() => {
    gsap.to(rowRefs.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })
  }, [])

  return (
    <section className="work-section" id="work" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">[ Projects ]</span>
          <h2 className="section-heading">
            Side Projects<br />&amp; Research
          </h2>
        </div>

        <div className="work-list">
          {projects.map((p, i) => (
            <a
              key={p.num}
              className="work-row"
              href={p.link}
              target={p.link !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              ref={el => { if (el) rowRefs.current[i] = el }}
            >
              <span className="work-num">{p.num}</span>
              <div className="work-info">
                <span className="work-title">
                  {p.title}
                  {p.tag && <span className={`work-tag work-tag--${p.tag.toLowerCase()}`}>{p.tag}</span>}
                </span>
                <span className="work-sub">{p.sub}</span>
              </div>
              <span className="work-tools">{p.tools}</span>
              <span className="work-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
