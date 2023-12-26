import { useState } from "react";
import { ControlsMobile } from "./NavbarMobile/ControlsMobile";
import { MobileMenu } from "./NavbarMobile/MobileMenu";
import { motion } from 'framer-motion';
import '../../styles/header.css';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) }

    return (
        <>
            <motion.header animate={{ y: [-100, 0] }}>
                <div className="headerDiv">
                    <h2><span className='fit'>Nahuel</span> Guirao<span className='dot'>.</span></h2>
                    {/* More than 768px Menu */}
                    <nav className="navbarNormal">
                        <a href="#">Home</a>
                        <a href="#">About me</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </nav>
                    <ControlsMobile toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                </div>
                <MobileMenu isMenuOpen={isMenuOpen} />
            </motion.header >
        </>
    )
}