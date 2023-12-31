import { motion } from 'framer-motion';
import { FaSquarePhone } from "react-icons/fa6";

export function ContactPhone() {
    return (
        <div className='containerIndividualInfo'>
            <motion.div whileInView={{ scale: [0, 1] }}>
                <FaSquarePhone className="contactIcon" />
            </motion.div>
            <motion.p whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>
                +54 <span className="fit">1162369734</span>
            </motion.p>
        </div>
    )
}