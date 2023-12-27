import { AnimatedText } from './AnimatedText'
import { motion } from 'framer-motion'

export function PresentationText({ translations }) {
    return (
        <motion.div className='text' animate={{ x: [-500, 0] }} transition={{ delay: .7 }}>
            <h1 className='mainText'>
                {translations.hi}<span className='dot'>,</span>{translations.im}<span className='strongWord'>Nahuel</span>👋
            </h1>
            <AnimatedText words={translations.animatedText} />
        </motion.div >
    )
}