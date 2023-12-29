import { FaArrowRightLong } from "react-icons/fa6";
import { AR, US } from 'country-flag-icons/react/3x2'
import { motion } from 'framer-motion'

export function ControlsLanguage({ translations, switchLanguage, actualLanguage }) {
    return (
        <motion.div className="choseLanguage" animate={{ x: [200, 0] }} transition={{ delay: .7 }}>
            <div className="choseLanguageText">
                <motion.p whileTap={{ x: 5 }}>
                    {translations.switchLanguage}
                </motion.p>
                <motion.div whileTap={{ x: 5 }}>
                    <FaArrowRightLong />
                </motion.div>
            </div>
            {actualLanguage === 'es' ?
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: .7 }}>
                    <US className='choseLanguageFlag' onClick={switchLanguage} />
                </motion.div>
                :
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: .7 }}>
                    <AR className='choseLanguageFlag' onClick={switchLanguage} />
                </motion.div>
            }
        </motion.div>
    )
}