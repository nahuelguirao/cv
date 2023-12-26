import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

export function LinkedinLink() {
    return (
        <motion.a
            href="https://www.linkedin.com/in/nahuel-guirao-6b1a96242/"
            target='_blank'
            whileHover={{ scale: 1.2, color: '#ffff' }}
        >
            <FaLinkedin />
        </motion.a>
    )
}