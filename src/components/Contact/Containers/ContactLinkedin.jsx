import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";

export function ContactLinkedin() {
    return (
        <div className='containerIndividualInfo'>
            <motion.div whileInView={{ scale: [0, 1] }}>
                <FaLinkedin className="contactIcon" />
            </motion.div>
            <motion.p whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>
                Nahuel Guirao
            </motion.p>
        </div>
    )
}