import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { motion } from 'framer-motion'
import '../../styles/ProjectsStyles/projects.css'

export function Projects() {
    return (
        <section className="projectsSection">
            <motion.h1 whileInView={{ opacity: [0, 1] }}>Mis proyectos <span className='liveSpan dot'>.</span></motion.h1>
            <motion.p whileInView={{ opacity: [0, 1] }}>*Click en una imagen para mas info!</motion.p>
            <div className='projectsContainer'>
                <article className='principalProject'>
                    <motion.h3 whileInView={{ scale: [0, 1] }}>MovieWiki</motion.h3>
                    <div className='linksContainer'>
                        <a target="blank" href="https://github.com/nahuelguirao/MovieAppReact"><FaGithub /></a>
                        <a target="blank" href="https://wiki-movie-react.netlify.app/"><RiLiveFill /></a>
                    </div>
                    <img src='ProjectsImg/movieWiki.png' alt="Movie wiki image" />
                </article>
                <article className='principalProject'>
                    <motion.h3 whileInView={{ scale: [0, 1] }}>Taskly</motion.h3>
                    <div className='linksContainer'>
                        <a target="blank" href="https://github.com/nahuelguirao/Taskly"><FaGithub /></a>
                        <RiLiveFill />
                    </div>
                    <img src='ProjectsImg/Taskly.png' alt="Taskly image" />
                </article>
            </div >
        </section >
    )
}