import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";

export function PokeWiki() {
    return (
        <article className='simpleProject'>
            <motion.h3 whileInView={{ scale: [0, 1] }}>PokeWiki</motion.h3>
            <div className='simpleProjectImgContainer'>
                <img src='/ProjectsImg/pokeWiki.png' alt='project image' />
            </div>
            <div className="simpleProjectIconContainer">
                <FaGithub className="simpleProjectIcon" />
                <RiLiveFill className="simpleProjectIcon" />
            </div>
        </article>
    )
}