import { TechContainer } from "./TechContainer";
import { motion } from 'framer-motion';
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import { FaComputer } from "react-icons/fa6";

export function TechSkills({ paragrapshOpen, isParagraphOpen, toggleParagraph, translations }) {
    return (
        <div className='aboutParagraph'>
            <div className='paragraphHeadlineContainer'>
                <motion.p className='paragraphTitle' whileInView={{ scale: [0, 1] }}>
                    <FaComputer className="paragraphIcon" />{translations.techSkills}
                </motion.p>
                {isParagraphOpen(4) ? (
                    <motion.div whileTap={{ scale: 2 }}>
                        <GoTriangleUp className='paragraphControl' onClick={() => toggleParagraph(4)} />
                    </motion.div>
                ) : (
                    <motion.div whileTap={{ scale: 2 }}>
                        <GoTriangleDown className='paragraphControl' onClick={() => toggleParagraph(4)} />
                    </motion.div>
                )}
            </div>
            <TechContainer paragrapshOpen={paragrapshOpen} />
        </div>
    )
}