import { motion } from 'framer-motion'

export function DownloadButton() {
    return (
        <motion.button
            animate={{ scale: [0, 1] }}
            transition={{ delay: .7 }}
        >
            Download CV
        </motion.button>
    )
}