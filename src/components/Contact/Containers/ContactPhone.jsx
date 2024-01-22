import { motion } from 'framer-motion';
import { FaSquarePhone } from "react-icons/fa6";

export function ContactPhone() {
    return (
        <div className='containerIndividualInfo'>
            <motion.div whileInView={{ scale: [0, 1] }}>
                <a target='_blank' href="https://wa.me/1162369734"><FaSquarePhone className="contactIcon" /></a>
            </motion.div>
            <motion.p whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>
                +54 <span className="fit">1162369734</span>
            </motion.p>
        </div>
    )
}