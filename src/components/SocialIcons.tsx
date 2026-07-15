import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import './styles/SocialIcons.css'

const SocialIcons = () => {
  return (
    <div className="social-icons-fixed">
      <a
        className="social-icon-link"
        href="https://github.com/swaralichine"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        className="social-icon-link"
        href="https://www.linkedin.com/in/swaralichine"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
    </div>
  )
}

export default SocialIcons
