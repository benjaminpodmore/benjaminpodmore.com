import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
      <footer className="py-8 mt-8 border-gray-200">
        <div className="text-center">
          <p className="mb-2">Contact: benjaminpodmore@gmail.com</p>
          <div className="flex justify-center space-x-4">
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
        </div>
      </footer>
    );
}

export default Footer;
