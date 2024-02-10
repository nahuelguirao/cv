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
                <a href="https://github.com/nahuelguirao/weather-app-react" target='blank'><FaGithub className="simpleProjectIcon" /></a>
                <a href="https://liveclima.netlify.app/" target='blank'><RiLiveFill className="simpleProjectIcon" /></a>
            </div>
        </article>
    )
}