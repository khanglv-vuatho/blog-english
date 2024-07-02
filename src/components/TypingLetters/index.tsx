'use client'

import { motion } from 'framer-motion'

const TypingLetters = ({ words, delay = 0.05 }: { words: string[]; delay?: number }) => {
  return words.map((word, index) => {
    if (!word) return
    return (
      <motion.span
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: delay * (index + 1)
        }}
        key={index}
      >
        {word}
      </motion.span>
    )
  })
}
export default TypingLetters
