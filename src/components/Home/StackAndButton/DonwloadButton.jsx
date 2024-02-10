import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext'
import { motion } from 'framer-motion'
import { downloadCv } from '../../../helpers/downloadCv'

export function DownloadButton({ translations }) {
    const { language } = useContext(LanguageContext)

    return (
        <motion.button
            onClick={() => downloadCv(language)}
            animate={{ scale: [0, 1] }}
            transition={{ delay: .7 }}
        >
            {translations.download}
        </motion.button>
    )
}