import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export function Taskly() {
    const navigate = useNavigate()

    const handleImageClick = () => {
        navigate('/taskly');
    };

    return (
        <article className='principalProject'>
            <motion.h3 whileInView={{ scale: [0, 1] }}>Taskly</motion.h3>
            <div className='linksContainer'>
                <a target="blank" href="https://github.com/nahuelguirao/Taskly"><FaGithub /></a>
                <a target='blank' href="https://tasklyy.netlify.app/"><RiLiveFill /></a>
            </div>
            <div className="projectImgContainer">
                <img src='ProjectsImg/Taskly.png' alt="Taskly image" onClick={handleImageClick} />
            </div>
        </article>
    )
}