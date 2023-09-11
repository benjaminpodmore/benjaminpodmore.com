import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <h1 className="text-xl font-bold mb-4 text-center">Welcome to My Website</h1>
        <p className="mb-6 text-center">
          I am a final year Software Engineering Student at UWA, interested in NLP, Cloud and IoT.
        </p>
        <div className="text-center">
          <button className="border rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300">
            More to come
          </button>
        </div>
        </motion.div>
    )
}

export default About
