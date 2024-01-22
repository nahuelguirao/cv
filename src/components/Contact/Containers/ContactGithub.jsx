import { motion } from 'framer-motion';
import { FaGithubSquare } from "react-icons/fa";

export function ContactGithub() {
    return (
        <div className='containerIndividualInfo'>
            <motion.div whileInView={{ scale: [0, 1] }}>
                <a target='_blank' href="https://github.com/nahuelguirao"><FaGithubSquare className="contactIcon" /></a>
            </motion.div>
            <motion.p whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>
                user:nahuelguirao
            </motion.p>
        </div>
    )
}