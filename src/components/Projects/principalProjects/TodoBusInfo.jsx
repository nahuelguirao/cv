import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import { tasklyTranslations } from "../../../translations/tasklyTranslations";
import { SpecificNavbar } from "../../Header/SpecificNavbar/SpecificNavbar";
import ImageGallery from "react-image-gallery";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import "../../../styles/ProjectsStyles/projectsInfo.scss";
import "../../../styles/ProjectsStyles/galerry.scss";

export function TodoBusInfo() {
  const images = [
    {
      original: "/ProjectsImg/todobus1.png",
    },
    {
      original: "/TasklyImgs/todobus2.PNG",
    },
    {
      original: "/TasklyImgs/todobus3.PNG",
    },
    {
      original: "/TasklyImgs/todobus4.PNG",
    },
    {
      original: "/TasklyImgs/todobus5.PNG",
    },
    {
      original: "/TasklyImgs/todobus6.PNG",
    },
    {
      original: "/TasklyImgs/todobus7.PNG",
    },
    {
      original: "/TasklyImgs/todobus8.PNG",
    },
  ];

  const { language } = useContext(LanguageContext);
  const translations = tasklyTranslations[language];

  return (
    <>
      <SpecificNavbar />
      <div className="prinicpalProjectDiv">
        <motion.section
          className="principalProjectInfoSection"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="allDataContainer">
            <div className="specificProjectHeader">
              <h1>TodoBus</h1>
              <div className="linksSpecificProject">
                <a target="blank" href="https://todobus.cl/">
                  <RiLiveFill />
                </a>
              </div>
            </div>
            <div className="description">
              <p className="projectDescription">{translations.description}</p>

              <div className="usedTechnologiesContainer">
                <h3>{translations.technologies}</h3>
                <div className="usedTechnologies">
                  <p>Next JS</p>
                  <p>Postgres SQL</p>
                  <p>Cloudinary</p>
                  <p>Vercel</p>
                  <p>Express JS</p>
                </div>
              </div>
            </div>
            <div className="gallery">
              <ImageGallery items={images} />
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
