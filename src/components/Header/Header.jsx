import React from "react";
import { useToggleMenu } from "../../hooks/useToggleMenu";
import navbarTranslations from "../../translations/navbarTranslation";
import { LanguageContext } from "../../context/LanguageContext";
import { ControlsMobile } from "./NavbarMobile/ControlsMobile";
import { MobileMenu } from "./NavbarMobile/MobileMenu";
import { motion } from 'framer-motion';
import '../../styles/header.css';

export function Header() {
    //Mobile navbar controls
    const { isMenuOpen, toggleMenu } = useToggleMenu()

    //Language context
    const { language } = React.useContext(LanguageContext)
    const translations = navbarTranslations[language]

    return (
        <>
            <motion.header animate={{ opacity: [0, 1] }}>
                <div className="headerDiv">
                    <h2>
                        <span className='fit'>Nahuel</span> Guirao<span className='dot'>.</span>
                    </h2>
                    {/* More than 1000px Menu */}
                    <nav className="navbarNormal">
                        <a href="#">{translations.home}</a>
                        <a href="#">{translations.about}</a>
                        <a href="#">{translations.projects}</a>
                        <a href="#">{translations.contact}</a>
                    </nav>
                    <ControlsMobile toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                </div>
                <MobileMenu isMenuOpen={isMenuOpen} translations={translations} />
            </motion.header >
        </>
    )
}