import React from "react";
import { useToggleMenu } from "../../hooks/useToggleMenu";
import navbarTranslations from "../../translations/navbarTranslation";
import { LanguageContext } from "../../context/LanguageContext";
import { ControlsMobile } from "./NavbarMobile/ControlsMobile";
import { MobileMenu } from "./NavbarMobile/MobileMenu";
import { scrollToSomewhere } from "../../helpers/scrollTo";
import { motion } from 'framer-motion';
import '../../styles/header.css';

export function Header() {
    //Mobile navbar controls
    const { isMenuOpen, toggleMenu } = useToggleMenu()

    //Language context
    const { language } = React.useContext(LanguageContext)
    const translations = navbarTranslations[language]

    //Scrolls
    const { scrollToHome, scrollToAbout, scrollToProjects, scrollToContact } = scrollToSomewhere()

    return (
        <>
            <motion.header animate={{ opacity: [0, 1] }}>
                <div className="headerDiv">
                    <h2>
                        <span className='fit'>Nahuel</span> Guirao<span className='dot liveSpan'>.</span>
                    </h2>
                    {/* More than 1000px Menu */}
                    <nav className="navbarNormal">
                        <a onClick={scrollToHome}>{translations.home}</a>
                        <a onClick={scrollToAbout}>{translations.about}</a>
                        <a onClick={scrollToProjects}>{translations.projects}</a>
                        <a onClick={scrollToContact}>{translations.contact}</a>
                    </nav>
                    <ControlsMobile toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                </div>
                <MobileMenu isMenuOpen={isMenuOpen} translations={translations} toggleMenu={toggleMenu} />
            </motion.header >
        </>
    )
}