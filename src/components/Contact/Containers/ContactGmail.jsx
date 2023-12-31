import { motion } from 'framer-motion';
import { CgMail } from "react-icons/cg";

export function ContactGmail() {
    return (
        <div className='containerIndividualInfo'>
            <motion.div whileInView={{ scale: [0, 1] }}>
                <CgMail className="contactIcon" />
            </motion.div>
            <motion.p whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>
                nahuelguirao2@gmail.com
            </motion.p>
        </div>
    )
}