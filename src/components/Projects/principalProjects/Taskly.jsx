import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";

export function Taskly() {
    return (
        <article className='principalProject'>
            <motion.h3 whileInView={{ scale: [0, 1] }}>Taskly</motion.h3>
            <div className='linksContainer'>
                <a target="blank" href="https://github.com/nahuelguirao/Taskly"><FaGithub /></a>
                <RiLiveFill />
            </div>
            <div className="projectImgContainer">
                <img src='ProjectsImg/Taskly.png' alt="Taskly image" />
            </div>
        </article>
    )
}