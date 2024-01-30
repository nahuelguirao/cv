import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";

export function WeatherApp() {
    return (
        <article className='simpleProject'>
            <motion.h3 whileInView={{ scale: [0, 1] }}>Weather app</motion.h3>
            <div className='simpleProjectImgContainer'>
                <img src='/ProjectsImg/weatherApp.png' alt='project image' />
            </div>
            <div className="simpleProjectIconContainer">
                <FaGithub className="simpleProjectIcon" />
                <RiLiveFill className="simpleProjectIcon" />
            </div>
        </article>
    )
}