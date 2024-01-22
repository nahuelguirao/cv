import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSomewhere } from '../../../helpers/scrollTo';

export function MobileMenu({ isMenuOpen, translations, toggleMenu }) {
    const opacity = { opacity: [0, 1] }
    const duration = { duration: .5 }

    //Scrolls 
    const { scrollToHome, scrollToAbout, scrollToProjects, scrollToContact } = scrollToSomewhere()

    //Less than 1000px Menu
    return (
        < AnimatePresence >
            {isMenuOpen && (
                <motion.nav
                    className="navbarMobile"
                    animate={{ y: [-300, 0] }}
                    exit={{ y: [0, -300] }}
                    transition={{ ease: 'easeIn', duration: .2 }}
                >
                    <motion.a onClick={() => { scrollToHome(); toggleMenu() }} whileInView={opacity} transition={duration}>
                        {translations.home}
                    </motion.a>
                    <motion.a onClick={() => { scrollToAbout(); toggleMenu() }} whileInView={opacity} transition={duration}>
                        {translations.about}
                    </motion.a>
                    <motion.a onClick={() => { scrollToProjects(); toggleMenu() }} whileInView={opacity} transition={duration}>
                        {translations.projects}
                    </motion.a>
                    <motion.a onClick={() => { scrollToContact(); toggleMenu() }} whileInView={opacity} transition={duration}>
                        {translations.contact}
                    </motion.a>
                </motion.nav >
            )}
        </AnimatePresence >
    )
}