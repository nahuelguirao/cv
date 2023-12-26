import { AnimatedText } from './AnimatedText'
import { motion } from 'framer-motion'

export function PresentationText() {
    return (
        <motion.div className='text' animate={{ x: [-500, 0] }} transition={{ delay: .7 }}>
            <h1 className='mainText'>Hi<span className='dot'>,</span> I'm <span className='strongWord'>Nahuel</span>👋</h1>
            <AnimatedText />
        </motion.div >
    )
}