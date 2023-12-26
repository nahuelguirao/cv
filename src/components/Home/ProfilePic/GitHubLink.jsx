import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'

export function GitHubLink() {
    return (
        <motion.a
            href="https://github.com/nahuelguirao"
            target='_blank'
            whileHover={{ scale: 1.2, color: '#ffff' }}
        >
            <FaGithub />
        </motion.a>
    )
}