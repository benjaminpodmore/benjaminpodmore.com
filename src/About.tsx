import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <h1 className="text-xl font-bold mb-4 text-center">Welcome to My Website</h1>
        <p className="mb-6 text-center">
          I am a final year Software Engineering Student at UWA, interested in NLP, Cloud and IoT.
        </p>
        <div className="flex items-center justify-center">
          <a 
            href="https://www.github.com/benjaminpodmore" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-md p-1 hover:text-blue-500 text-center inline-block text-xl w-8"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a 
            href="https://www.linkedin.com/in/benjaminpodmore" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-md p-1 hover:text-blue-500 text-center inline-block text-xl w-8"
          >
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
          </a>
        </div>
        </motion.div>
    )
}

export default About
