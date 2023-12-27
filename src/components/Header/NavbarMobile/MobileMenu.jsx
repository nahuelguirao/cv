import { motion, AnimatePresence } from 'framer-motion';

export function MobileMenu({ isMenuOpen, translations }) {
    const opacity = { opacity: [0, 1] }
    const duration = { duration: .5 }

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
                    <motion.a whileInView={opacity} transition={duration} href="#">
                        {translations.home}
                    </motion.a>
                    <motion.a whileInView={opacity} transition={duration} href="#">
                        {translations.about}
                    </motion.a>
                    <motion.a whileInView={opacity} transition={duration} href="#">
                        {translations.projects}
                    </motion.a>
                    <motion.a whileInView={opacity} transition={duration} href="#">
                        {translations.contact}
                    </motion.a>
                </motion.nav >
            )}
        </AnimatePresence >
    )
}