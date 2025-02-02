import { useContext } from "react";
import { SpecificNavbar } from "../../Header/SpecificNavbar/SpecificNavbar";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import ImageGallery from "react-image-gallery";
import { LanguageContext } from "../../../context/LanguageContext";
import { stockManagerTranslations } from "../../../translations/stockManagerTranslations";

export function StockManagerInfo() {
  const images = [
    {
      original: "/stockManagerImgs/stockManager.PNG",
    },
    {
      original: "/stockManagerImgs/stockManager2.PNG",
    },
    {
      original: "/stockManagerImgs/stockManager3.PNG",
    },
    {
      original: "/stockManagerImgs/stockManager4.PNG",
    },
    {
      original: "/stockManagerImgs/stockManager5.PNG",
    },
  ];

  const { language } = useContext(LanguageContext);
  const translations = stockManagerTranslations[language];

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
              <h1>Stock Manager</h1>
              <div className="linksSpecificProject">
                <a target="blank" href="https://github.com/nahuelguirao/gestor-stock">
                  <FaGithub />
                </a>
                <a target="blank" href="https://stock-manager-ng.netlify.app/">
                  <RiLiveFill />
                </a>
              </div>
            </div>
            <div className="description">
              <p className="projectDescription">{translations.description}</p>
              <div className="usedTechnologiesContainer">
                <h3>{translations.technologies}</h3>
                <div className="usedTechnologies">
                  <p>CSS</p>
                  <p>React</p>
                  <p>TypeScript</p>
                  <p>Express JS</p>
                  <p>Postgre SQL</p>
                  <p>GIT</p>
                  <p>Vercel</p>
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
