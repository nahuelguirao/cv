import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import principalProjectsTranslations from "../../translations/principalProjectsTranslations";
import { MovieWiki } from "./principalProjects/MovieWiki";

import { motion } from "framer-motion";
import { StockManager } from "./principalProjects/StockManager";
import { BizarrapAPI } from "./principalProjects/BizarrapAPI";
import "../../styles/ProjectsStyles/projects.scss";
import { TodoBus } from "./principalProjects/TodoBus";

export function PrincipalProjects() {
  const { language } = useContext(LanguageContext);
  const translations = principalProjectsTranslations[language];

  return (
    <motion.section
      className="projectsSection"
      whileInView={{ x: [100, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 whileInView={{ opacity: [0, 1] }}>
        {translations.myProject}
        <span className="liveSpan dot">.</span>
      </motion.h1>
      <motion.p whileInView={{ opacity: [0, 1] }}>*{translations.clickImage}!</motion.p>
      <div className="projectsContainer">
        <TodoBus />
        <MovieWiki />
        <StockManager />
        <BizarrapAPI />
      </div>
    </motion.section>
  );
}
