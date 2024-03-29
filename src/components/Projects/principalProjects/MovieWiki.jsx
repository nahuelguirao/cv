import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export function MovieWiki() {
    const navigate = useNavigate()

    return (
        <article className='principalProject'>
            <motion.h3 whileInView={{ scale: [0, 1] }}>MovieWiki</motion.h3>
            <div className='linksContainer'>
                <a target="blank" href="https://github.com/nahuelguirao/MovieAppReact"><FaGithub /></a>
                <a target="blank" href="https://wiki-movie-react.netlify.app/"><RiLiveFill /></a>
            </div>
            <div className="projectImgContainer">
                <img src='ProjectsImg/movieWiki.png' alt="Movie wiki image" onClick={() => navigate('/movieWiki')} />
            </div>
        </article>
    )
}