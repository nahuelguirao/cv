import { motion } from "framer-motion";
import { RiLiveFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export function TodoBus() {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/todobus");
  };

  return (
    <article className="principalProject">
      <motion.h3 whileInView={{ scale: [0, 1] }}>TodoBus</motion.h3>
      <div className="linksContainer">
        <a target="blank" href="https://todobus.cl/">
          <RiLiveFill />
        </a>
      </div>
      <div className="projectImgContainer">
        <img src="ProjectsImg/todobus1.png" alt="TodoBus image" onClick={handleImageClick} />
      </div>
    </article>
  );
}
