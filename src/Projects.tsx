import { motion } from "framer-motion"

const Projects = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <h1 className="text-xl font-bold mb-4 text-center">Project List</h1>
        <p className="mb-6 text-center">
          Here you will be able to find a list of all the projects I have completed.
        </p>
        </motion.div>
    )
}

export default Projects
