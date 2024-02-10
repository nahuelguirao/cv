import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import { tasklyTranslations } from "../../../translations/tasklyTranslations";
import { SpecificNavbar } from "../../Header/SpecificNavbar/SpecificNavbar";
import ImageGallery from "react-image-gallery";
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import '../../../styles/ProjectsStyles/projectsInfo.scss';
import '../../../styles/ProjectsStyles/galerry.scss'

export function TasklyInfo() {
    const images = [
        {
            original: "/ProjectsImg/Taskly.png",
        },
        {
            original: "/TasklyImgs/Taskly1.png",
        },
        {
            original: "/TasklyImgs/Taskly2.png",
        },
        {
            original: "/TasklyImgs/Taskly3.png",
        },
        {
            original: "/TasklyImgs/Taskly4.png",
        },
    ];

    const { language } = useContext(LanguageContext)
    const translations = tasklyTranslations[language]

    return (
        <>
            <SpecificNavbar />
            <div className="prinicpalProjectDiv">
                <motion.section className="principalProjectInfoSection" animate={{ opacity: [0, 1] }} transition={{ duration: .5 }}>
                    <div className="allDataContainer">
                        <div className="specificProjectHeader">
                            <h1>Taskly</h1>
                            <div className='linksSpecificProject'>
                                <a target="blank" href="https://github.com/nahuelguirao/Taskly"><FaGithub /></a>
                                <a target='blank' href="https://tasklyy.netlify.app/"><RiLiveFill /></a>
                            </div>
                        </div>
                        <div className="description">
                            <p className="projectDescription">
                                {translations.description}
                            </p>
                            <p>
                                <a href="https://github.com/nahuelguirao/API_taskly" target="blank">{translations.repository}</a>
                            </p>
                            <div className="usedTechnologiesContainer">
                                <h3>{translations.technologies}</h3>
                                <div className="usedTechnologies">
                                    <p>CSS</p>
                                    <p>TypeScript</p>
                                    <p>React JS</p>
                                    <p>Django</p>
                                    <p>DRF</p>
                                </div>
                            </div>
                        </div>
                        <div className="gallery">
                            <ImageGallery items={images} />
                        </div>
                    </div>
                </motion.section>
            </div>
        </>
    )
}