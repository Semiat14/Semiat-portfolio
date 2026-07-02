import { motion } from 'framer-motion'

function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 69 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
