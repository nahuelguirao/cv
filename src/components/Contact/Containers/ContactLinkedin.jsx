import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";

export function ContactLinkedin() {
    return (
        <div className='containerIndividualInfo'>
            <motion.div whileInView={{ scale: [0, 1] }}>
                <a target='blank' href="https://www.linkedin.com/in/nahuel-guirao-6b1a96242/"><FaLinkedin className="contactIcon" /></a>
            </motion.div>

            <motion.p whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>
                Nahuel Guirao
            </motion.p>
        </div >
    )
}