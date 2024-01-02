import { motion } from 'framer-motion'
import '../../styles/FooterStyles/footer.css'

export function Footer() {
    return (
        <footer>
            <motion.h4 whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>
                <span className='fit'>©️</span> Nahuel Guirao<span className='dot liveSpan'>.</span> <span className='fit'>| 2024</span>
            </motion.h4>
            <div className='footerLinksContainer'>
                <motion.a href='#' whileInView={{ scale: [0, 1] }}>Home</motion.a>
                <motion.a href='#' whileInView={{ scale: [0, 1] }}>About</motion.a>
                <motion.a href='#' whileInView={{ scale: [0, 1] }}>Projects</motion.a>
                <motion.a href='#' whileInView={{ scale: [0, 1] }}>Contact</motion.a>
            </div>
        </footer>
    )
}