import { motion, AnimatePresence } from 'framer-motion';

export function MobileMenu({ isMenuOpen }) {
    //Less than 768px Menu
    return (
        < AnimatePresence >
            {isMenuOpen && (
                <motion.nav
                    className="navbarMobile"
                    animate={{ y: [-300, 0] }}
                    exit={{ y: [0, -300] }}
                    transition={{ ease: 'easeIn', duration: .2 }}
                >
                    <motion.a whileInView={{ opacity: [0, 1] }} transition={{ duration: .5 }} href="#">Home</motion.a>
                    <motion.a whileInView={{ opacity: [0, 1] }} transition={{ duration: .5 }} href="#">About me</motion.a>
                    <motion.a whileInView={{ opacity: [0, 1] }} transition={{ duration: .5 }} href="#">Projects</motion.a>
                    <motion.a whileInView={{ opacity: [0, 1] }} transition={{ duration: .5 }} href="#">Contact</motion.a>
                </motion.nav >
            )}
        </AnimatePresence >
    )
}