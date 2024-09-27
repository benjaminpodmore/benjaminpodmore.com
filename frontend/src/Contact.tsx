import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <section id="contact" className="h-screen bg-gray-800 snap-start flex items-center justify-center p-8">
            <div className="flex">
                <div className="flex-grow">
                    <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Contact </h2>
                        <p className="mb-2">benjaminpodmore@gmail.com</p>
                        <div className="flex justify-center space-x-2">
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
                </div>
            </div>
        </section>
    );
  }
  
  export default Contact;
  