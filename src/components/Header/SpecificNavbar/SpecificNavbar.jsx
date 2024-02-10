import { LanguageContext } from '../../../context/LanguageContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


export function SpecificNavbar() {
    const navigate = useNavigate()

    const { language } = useContext(LanguageContext)

    return (
        <motion.header className='specificHeader' animate={{ opacity: [0, 1] }}>
            <div className="headerDiv">
                <h2 onClick={() => navigate('/')}>
                    <span className='fit'>Nahuel</span> Guirao<span className='dot liveSpan'>.</span>
                </h2>
                {/* More than 1000px Menu */}
                <nav className="navbarSpecific">
                    <a onClick={() => navigate('/')}>{language == 'es' ? 'Inicio' : 'Home'}</a>
                </nav>
            </div>
        </motion.header>
    )
}