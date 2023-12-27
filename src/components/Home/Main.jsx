import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import mainTranslations from "../../translations/mainTranslations";
import { PresentationText } from "./PresentationText/PresentationText";
import { ProfilePic } from "./ProfilePic/ProfilePic";
import { ContainerStack } from "./StackAndButton/ContainerStack";
import { AstronautImage } from "./AstronautImage";
import { motion } from 'framer-motion';
import "../../styles/MainStyles/mainMobile.css";
import "../../styles/MainStyles/mainMedia.css";
import "../../styles/MainStyles/stackColors.css";
import { ControlsLanguage } from "./ControlsLanguage";

export function Main() {
    const { language, switchLanguage } = useContext(LanguageContext)
    const translations = mainTranslations[language]

    return (
        <main>
            <motion.section className='presentation' animate={{ scale: [0, 1] }} transition={{ delay: .5 }}>
                <div className='allDivsContainer'>
                    <PresentationText translations={translations} />
                    <ProfilePic />
                    <ContainerStack translations={translations} />
                    <AstronautImage />
                    <ControlsLanguage translations={translations} switchLanguage={switchLanguage} actualLanguage={language} />
                </div>
            </motion.section>
        </main >
    )
}