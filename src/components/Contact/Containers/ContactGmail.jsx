import { motion } from 'framer-motion';
import { CgMail } from "react-icons/cg";

export function ContactGmail() {
    return (
        <div className='containerIndividualInfo'>
            <motion.div whileInView={{ scale: [0, 1] }}>
                <a href="mailto:nahuelguirao2@gmail.com"><CgMail className="contactIcon" /></a>
            </motion.div>
            <motion.p whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>
                nahuelguirao2@gmail.com
            </motion.p>
        </div>
    )
}