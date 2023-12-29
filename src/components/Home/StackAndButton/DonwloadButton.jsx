import { motion } from 'framer-motion'
import { downloadCv } from '../../../helpers/downloadCv'

export function DownloadButton({ translations }) {
    return (
        <motion.button
            onClick={downloadCv}
            animate={{ scale: [0, 1] }}
            transition={{ delay: .7 }}
        >
            {translations.download}
        </motion.button>
    )
}