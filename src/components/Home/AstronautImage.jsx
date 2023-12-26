import { motion } from 'framer-motion';

export function AstronautImage() {
    return (
        <motion.div className='astronautImage' animate={{ x: [500, 0] }} transition={{ delay: .7 }}>
            <img src="/astronaut.png" alt="An astronaut with a macBook" />
        </motion.div>
    )
}