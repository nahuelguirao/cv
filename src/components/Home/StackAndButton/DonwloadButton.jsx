import { motion } from 'framer-motion'

export function DownloadButton({ translations }) {
    return (
        <motion.button
            animate={{ scale: [0, 1] }}
            transition={{ delay: .7 }}
        >
            {translations.download}
        </motion.button>
    )
}