import { motion } from 'framer-motion'

export function CatImage() {
    return (
        <motion.img
            src="/backgroundCat.png"
            className="cat"
            whileInView={{ x: [100, 0], scale: [0, 1] }}
            transition={{ duration: .3, delay: .2 }}
            viewport={{ once: true }}
        />
    )
}