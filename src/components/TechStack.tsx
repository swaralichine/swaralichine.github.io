import Marquee from 'react-fast-marquee'
import './styles/TechStack.css'

const row1 = ['AWS', 'S3', 'IAM', 'KMS', 'SAML', 'OIDC', 'SSO', 'SCIM', 'Kubernetes', 'EKS', 'Docker', 'Terraform', 'Jenkins', 'CI/CD']
const row2 = ['Prometheus', 'Grafana', 'ELK', 'Splunk', 'Python', 'Java', 'Bash', 'PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis', 'Elasticsearch']

const certs = [
  { icon: '☁', title: 'AWS Certified Solutions Architect – Associate', provider: 'Amazon Web Services' },
  { icon: '☁', title: 'AWS Certified Developer – Associate', provider: 'Amazon Web Services' },
  { icon: '🤖', title: 'AWS Certified AI Practitioner', provider: 'Amazon Web Services' },
  { icon: '☁', title: 'AWS Certified Cloud Practitioner', provider: 'Amazon Web Services' },
  { icon: '🧠', title: 'AWS Certified Generative AI — Professional', provider: 'Amazon Web Services · In Progress' },
]

const TechStack = () => {
  return (
    <section className="techstack-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">[ Tech Stack ]</span>
          <h2 className="section-heading">
            Tools &amp;<br />Technologies
          </h2>
        </div>
      </div>

      <div className="techstack-marquees">
        <Marquee speed={40} gradient={false} direction="left">
          {row1.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </Marquee>
        <Marquee speed={40} gradient={false} direction="right">
          {row2.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </Marquee>
      </div>

      <div className="container">
        <div className="section-sublabel">[ Certifications ]</div>
        <div className="cert-grid">
          {certs.map((cert) => (
            <div key={cert.title} className="cert-card">
              <span className="cert-icon">{cert.icon}</span>
              <div className="cert-text">
                <span className="cert-title">{cert.title}</span>
                <span className="cert-provider">{cert.provider}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
