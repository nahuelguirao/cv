import { motion, AnimatePresence } from 'framer-motion'
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiDjango } from "react-icons/si";
import { FaReact, FaPython, FaHtml5, FaGit } from "react-icons/fa";

export function TechContainer({ paragrapshOpen }) {
    return (
        <AnimatePresence>
            {paragrapshOpen.includes(4) && (
                <motion.div className='technologies'
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    key={'paragraph-4'}
                >
                    <motion.div
                        className="aboutTech"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                    >
                        <FaHtml5 className="html" />
                        <p className="techParagraph">HTML</p>
                    </motion.div>
                    <motion.div
                        className="aboutTech"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                    >
                        <IoLogoCss3 className="css" />
                        <p className="techParagraph">CSS</p>
                    </motion.div>
                    <motion.div
                        className="aboutTech"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                    >
                        <IoLogoJavascript className="js" />
                        <p className="techParagraph">JS</p>
                    </motion.div>
                    <motion.div
                        className="aboutTech"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                    >
                        <SiTypescript className="typeScript" />
                        <p className="techParagraph">TypeScript</p>
                    </motion.div>
                    <motion.div
                        className="aboutTech"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                    >
                        <FaReact className="react" />
                        <p className="techParagraph">React JS</p>
                    </motion.div>
                    <motion.div
                        className="aboutTech"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                    >
                        <FaPython className="python" />
                        <p className="techParagraph">Python</p>
                    </motion.div>
                    <motion.div
                        className="aboutTech"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                    >
                        < SiDjango className="django" />
                        <p className="techParagraph">Django</p>
                    </motion.div>

                    <motion.div
                        className="aboutTech"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                    >
                        < FaGit className="git" />
                        <p className="techParagraph">Git</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}