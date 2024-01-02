import { motion, AnimatePresence } from 'framer-motion';
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export function SoftSkills({ paragrapshOpen, isParagraphOpen, toggleParagraph, translations }) {
    return (
        <div className='aboutParagraph bottomBorder'>
            <div className='paragraphHeadlineContainer'>
                <motion.p className='paragraphTitle' whileInView={{ scale: [0, 1] }}>
                    <MdOutlineConnectWithoutContact className='paragraphIcon' />{translations.softSkills}
                </motion.p>
                {isParagraphOpen(3) ? (
                    <motion.div whileTap={{ scale: 2 }}>
                        <GoTriangleUp className='paragraphControl' onClick={() => toggleParagraph(3)} />
                    </motion.div>
                ) : (
                    <motion.div whileTap={{ scale: 2 }}>
                        <GoTriangleDown className='paragraphControl' onClick={() => toggleParagraph(3)} />
                    </motion.div>
                )}
            </div>
            <AnimatePresence>
                {paragrapshOpen.includes(3) && (
                    <p>
                        <motion.p
                            className="paragraphInfo  shortParagraph"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            key={'paragraph-3'}
                        >
                            {translations.thirdP}
                        </motion.p>
                        <motion.p
                            className="paragraphInfo  shortParagraph"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            key={'paragraph-4'}
                        >
                            {translations.thirdPtwo}
                        </motion.p>
                    </p>
                )}
            </AnimatePresence>
        </div>
    )
}