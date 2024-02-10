import { SpecificNavbar } from "../../Header/SpecificNavbar/SpecificNavbar";
import ImageGallery from "react-image-gallery";
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import '../../../styles/ProjectsStyles/projectsInfo.scss';
import '../../../styles/ProjectsStyles/galerry.scss'
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import { movieWikiTranslations } from "../../../translations/movieWikiTranslations";

export function MovieWikiInfo() {
    const images = [
        {
            original: "/movieWikiImgs/movieWiki2.png",
        },
        {
            original: "/movieWikiImgs/movieWiki3.png",
        },
        {
            original: "/movieWikiImgs/movieWiki4.png",
        },
        {
            original: "/movieWikiImgs/movieWiki5.png",
        },
        {
            original: "/movieWikiImgs/movieWiki7.png",
        },
    ];

    const { language } = useContext(LanguageContext)
    const translations = movieWikiTranslations[language]
    return (
        <>
            <SpecificNavbar />
            <div className="prinicpalProjectDiv">
                <motion.section className="principalProjectInfoSection" animate={{ opacity: [0, 1] }} transition={{ duration: .5 }}>
                    <div className="allDataContainer">
                        <div className="specificProjectHeader">
                            <h1>Movie Wiki</h1>
                            <div className='linksSpecificProject'>
                                <a target="blank" href="https://github.com/nahuelguirao/MovieAppReact"><FaGithub /></a>
                                <a target="blank" href="https://wiki-movie-react.netlify.app/"><RiLiveFill /></a>
                            </div>
                        </div>
                        <div className="description">
                            <p className="projectDescription">
                                {translations.description}
                            </p>
                            <div className="usedTechnologiesContainer">
                                <h3>{translations.technologies}</h3>
                                <div className="usedTechnologies">
                                    <p>CSS</p>
                                    <p>React</p>
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