import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import { SpecificNavbar } from "../../Header/SpecificNavbar/SpecificNavbar";
import ImageGallery from "react-image-gallery";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { bizarrapAPITranslations } from "../../../translations/bizarrapAPITranslations";

export function BizarrapAPIInfo() {
  const images = [
    {
      original: "/bizarrapAPIImgs/bizarrap-api.PNG",
    },
    {
      original: "/bizarrapAPIImgs/bizarrap-api2.PNG",
    },
    {
      original: "/bizarrapAPIImgs/bizarrap-api3.PNG",
    },
    {
      original: "/bizarrapAPIImgs/bizarrap-api4.PNG",
    },
  ];

  const { language } = useContext(LanguageContext);
  const translations = bizarrapAPITranslations[language];
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
              <h1>Bizarrap API</h1>
              <div className="linksSpecificProject">
                <a target="blank" href="https://github.com/nahuelguirao/Bizarrap-API">
                  <FaGithub />
                </a>
                <a target="blank" href="https://bzrp-api.netlify.app/">
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
                  <p>Express JS</p>
                  <p>Docker</p>
                  <p>Mongo DB</p>
                  <p>Mongoose</p>
                  <p>Railway</p>
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
