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
                <a href="https://github.com/nahuelguirao/poke-wiki" target='blank'><FaGithub className="simpleProjectIcon" /></a>
                <a href="https://npoke-wiki.netlify.app/" target='blank'><RiLiveFill className="simpleProjectIcon" /></a>
            </div>
        </article>
    )
}