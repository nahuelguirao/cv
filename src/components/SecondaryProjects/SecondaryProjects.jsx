import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import secondaryProjectsTranslations from '../../translations/secondaryProjectsTranslations';
import { PokeWiki } from './secondaryProjectsContainers/PokeWiki';
import { TradingNahuel } from './secondaryProjectsContainers/TradingNahuel';
import { TicTacToe } from './secondaryProjectsContainers/TicTacToe';
import { WeatherApp } from './secondaryProjectsContainers/WeatherApp';
import { motion } from 'framer-motion'
import '../../styles/ProjectsStyles/secondaryProjects.scss'

export function SecondaryProjects() {
    const { language } = useContext(LanguageContext)
    const translations = secondaryProjectsTranslations[language]

    return (
        <motion.section className="projectsSection" whileInView={{ x: [-100, 0] }} transition={{ duration: .6 }} viewport={{ once: true }}>
            <motion.h1 whileInView={{ opacity: [0, 1] }}>
                {translations.title}<span className='fit'>{translations.simpler}</span> {translations.projects}<span className='liveSpan dot'>.</span>
            </motion.h1>
            <div className='simpleProjectsContainer'>
                <WeatherApp />
                <TicTacToe />
                <PokeWiki />
                <TradingNahuel />
            </div>
        </motion.section>
    )
} 