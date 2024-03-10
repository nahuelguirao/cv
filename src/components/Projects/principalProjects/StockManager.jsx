import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export function StockManager() {
    const navigate = useNavigate()
    return (
        <article className='principalProject'>
            <motion.h3 whileInView={{ scale: [0, 1] }}>Stock Manager</motion.h3>
            <div className='linksContainer'>
                <a target="blank" href="https://github.com/nahuelguirao/gestor-stock"><FaGithub /></a>
                <a target="blank" href="https://stock-manager-ng.netlify.app/"><RiLiveFill /></a>
            </div>
            <div className="projectImgContainer">
                <img src='ProjectsImg/stockManager.PNG' alt="Stock manager image" onClick={() => navigate('/stockManager')} />
            </div>
        </article>
    )
}