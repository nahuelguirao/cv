import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import aboutTranslations from '../../translations/aboutTranslations';
import { useAccordion } from '../../hooks/useAccordion';
import { Who } from "./Paragraphs/Who";
import { Goal } from "./Paragraphs/Goal";
import { SoftSkills } from "./Paragraphs/SoftSkills";
import { TechSkills } from "./Paragraphs/TechSkills/TechSkills";
import { CatImage } from './Paragraphs/CatImage';
import { motion } from 'framer-motion';
import '../../styles/AboutStyles/about.scss';

export function About() {
    const { paragrapshOpen, toggleParagraph, isParagraphOpen } = useAccordion()

    const { language } = useContext(LanguageContext)
    const translations = aboutTranslations[language]

    return (
        <section className="aboutSection">
            <motion.div
                className='aboutSectionContainer'
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: .6 }}
                viewport={{ once: true }}
            >
                <motion.h1 className='aboutTitle' whileInView={{ opacity: [0, 1] }}>
                    <span className='fit'>{translations.about}</span>{translations.me}<span className='dot liveSpan'>.</span>
                </motion.h1>
                <div className='aboutTextContainer'>
                    <Who paragrapshOpen={paragrapshOpen} isParagraphOpen={isParagraphOpen} toggleParagraph={toggleParagraph} translations={translations} />
                    <Goal paragrapshOpen={paragrapshOpen} isParagraphOpen={isParagraphOpen} toggleParagraph={toggleParagraph} translations={translations} />
                    <SoftSkills paragrapshOpen={paragrapshOpen} isParagraphOpen={isParagraphOpen} toggleParagraph={toggleParagraph} translations={translations} />
                    <TechSkills paragrapshOpen={paragrapshOpen} isParagraphOpen={isParagraphOpen} toggleParagraph={toggleParagraph} translations={translations} />
                </div>
                <CatImage />
            </motion.div>
        </section >
    )
}