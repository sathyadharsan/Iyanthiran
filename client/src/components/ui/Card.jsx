import React from "react"
import { motion } from "framer-motion"

const Card = ({ children, className = "", hoverable = true, delay = 0 }) => {
  return (
    <motion.div className={`bg-white rounded-2xl p-6 shadow-md ${hoverable ? "hover:shadow-xl transition-shadow cursor-pointer" : ""} ${className}`} whileHover={hoverable ? { y: -8 } : {}} transition={{ delay, duration: 0.3 }}>
      {children}
    </motion.div>
  )
}
export default Card
