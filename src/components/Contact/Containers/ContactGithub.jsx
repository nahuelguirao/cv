import { motion } from 'framer-motion';
import { FaGithubSquare } from "react-icons/fa";

export function ContactGithub() {
    return (
        <div className='containerIndividualInfo'>
            <motion.div whileInView={{ scale: [0, 1] }}>
                <FaGithubSquare className="contactIcon" />
            </motion.div>
            <motion.p whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>
                user:nahuelguirao
            </motion.p>
        </div>
    )
}