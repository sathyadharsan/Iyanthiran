import React from "react"
import { motion } from "framer-motion"

const Button = ({ children, variant = "primary", onClick, className = "", size = "md" }) => {
  const baseClasses = "rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none"
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  }
  const variants = {
    primary: "bg-accent-500 hover:bg-accent-600 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
    ghost: "bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50"
  }
  return (
    <motion.button whileTap={{ scale: 0.98 }} className={`${baseClasses} ${sizeClasses[size]} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </motion.button>
  )
}
export default Button
