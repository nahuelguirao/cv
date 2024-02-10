import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";

export function TradingNahuel() {
    return (
        <article className='simpleProject'>
            <motion.h3 whileInView={{ scale: [0, 1] }}>Trading Nahuel</motion.h3>
            <div className='simpleProjectImgContainer'>
                <img src='/ProjectsImg/TradingNahuel.png' alt='project image' />
            </div>
            <div className="simpleProjectIconContainer">
                <a href="https://github.com/nahuelguirao/trading_nahuel" target='blank'><FaGithub className="simpleProjectIcon" /></a>
                <a href="https://nahuel-trading.netlify.app/" target='blank'><RiLiveFill className="simpleProjectIcon" /></a>
            </div>
        </article>
    )
}