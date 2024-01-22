import { scrollToSomewhere } from '../../helpers/scrollTo'
import { motion } from 'framer-motion'
import '../../styles/FooterStyles/footer.css'

export function Footer() {
    //Scrolls
    const { scrollToHome, scrollToAbout, scrollToProjects } = scrollToSomewhere()

    return (
        <footer>
            <motion.h4 whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>
                <span className='fit'>©️</span> Nahuel Guirao<span className='dot liveSpan'>.</span> <span className='fit'>| 2024</span>
            </motion.h4>
            <div className='footerLinksContainer'>
                <motion.a onClick={scrollToHome} whileInView={{ scale: [0, 1] }}>Home</motion.a>
                <motion.a onClick={scrollToAbout} whileInView={{ scale: [0, 1] }}>About</motion.a>
                <motion.a onClick={scrollToProjects} whileInView={{ scale: [0, 1] }}>Projects</motion.a>
                <motion.a whileInView={{ scale: [0, 1] }}>Contact</motion.a>
            </div>
        </footer>
    )
}