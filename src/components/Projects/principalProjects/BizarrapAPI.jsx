import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export function BizarrapAPI() {
    const navigate = useNavigate()
    return (
        <article className='principalProject'>
            <motion.h3 whileInView={{ scale: [0, 1] }}>Bizarrap API</motion.h3>
            <div className='linksContainer'>
                <a target="blank" href="https://github.com/nahuelguirao/Bizarrap-API"><FaGithub /></a>
                <a target="blank" href="https://bzrp-api.netlify.app/"><RiLiveFill /></a>
            </div>
            <div className="projectImgContainer">
                <img src='ProjectsImg/bizarrap-api.PNG' alt="Stock manager image" onClick={() => navigate('/bizarrapAPI')} />
            </div>
        </article>
    )
}