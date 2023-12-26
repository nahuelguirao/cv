import { PresentationText } from "./PresentationText/PresentationText";
import { ProfilePic } from "./ProfilePic/ProfilePic";
import { ContainerStack } from "./StackAndButton/ContainerStack";
import { AstronautImage } from "./AstronautImage";
import { motion } from 'framer-motion';
import "../../styles/MainStyles/mainMobile.css";
import "../../styles/MainStyles/mainMedia.css";
import "../../styles/MainStyles/stackColors.css";

export function Main() {
    return (
        <main>
            <motion.section className='presentation' animate={{ scale: [0, 1] }} transition={{ delay: .5 }}>
                <div className='allDivsContainer'>
                    <PresentationText />
                    <ProfilePic />
                    <ContainerStack />
                    <AstronautImage />
                </div>
            </motion.section>
        </main >
    )
}