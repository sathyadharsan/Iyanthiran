import React from "react"
import { motion } from "framer-motion"

const StatCard = ({ number, label, icon: Icon, delay = 0 }) => {
  return (
    <motion.div className="bg-blue-50 rounded-2xl p-6 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay, duration: 0.6 }}>
      {Icon && <div className="flex justify-center mb-3"><Icon className="w-8 h-8 text-teal-500" /></div>}
      <motion.div className="text-4xl font-bold text-primary-600">{number}</motion.div>
      <div className="text-slate-600 mt-2 font-medium">{label}</div>
    </motion.div>
  )
}
export default StatCard
