import { motion, AnimatePresence } from 'framer-motion';
import { GoTriangleDown, GoTriangleUp, GoGoal } from "react-icons/go";

export function Goal({ paragrapshOpen, isParagraphOpen, toggleParagraph, translations }) {
    return (
        <div className='aboutParagraph bottomBorder'>
            <div className='paragraphHeadlineContainer'>
                <motion.p className='paragraphTitle' whileInView={{ scale: [0, 1] }}>
                    <GoGoal className='paragraphIcon' />{translations.goal}
                </motion.p>
                {isParagraphOpen(2) ? (
                    <motion.div whileTap={{ scale: 2 }}>
                        <GoTriangleUp className='paragraphControl' onClick={() => toggleParagraph(2)} />
                    </motion.div>
                ) : (
                    <motion.div whileTap={{ scale: 2 }}>
                        <GoTriangleDown className='paragraphControl' onClick={() => toggleParagraph(2)} />
                    </motion.div>
                )}
            </div>
            <AnimatePresence>
                {paragrapshOpen.includes(2) && (
                    <motion.p
                        className="paragraphInfo  shortParagraph"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        key={'paragraph-2'}
                    >
                        {translations.secondP}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    )
}