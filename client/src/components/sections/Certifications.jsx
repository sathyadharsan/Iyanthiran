import React from "react"
import { motion } from "framer-motion"

const certs = ["Google Ads Certification", "Meta Blueprint", "Google Analytics 4", "HubSpot Certified", "SEMrush Certification", "Iyanthiran Certificate"]

const Certifications = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-50 to-primary-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Industry-Recognized Certifications</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">{certs.map((c, i) => (
          <motion.div key={c} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-teal-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-2xl">I</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{c}</h3>
          </motion.div>
        ))}</div>
      </div>
    </section>
  )
}
export default Certifications
