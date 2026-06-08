import React from "react"
import { motion } from "framer-motion"

const mentors = [
  { name: "Aashay Mishra", role: "Lead Digital Marketing Trainer", experience: "8+ Years", companies: ["Google", "Amazon"] },
  { name: "Bibin George", role: "Digital Marketing Expert", experience: "12+ Years", companies: ["Meta", "Flipkart"] },
  { name: "Akram Ali", role: "Marketing Strategist", experience: "12+ Years", companies: ["Swiggy", "Zomato"] }
]

const Mentors = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Learn From Industry Experts</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">{mentors.map((m, i) => (
          <motion.div key={m.name} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">{m.name.charAt(0)}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{m.name}</h3>
            <p className="text-primary-600 font-medium mb-2">{m.role}</p>
            <p className="text-sm text-slate-500 mb-3">{m.experience} Experience</p>
          </motion.div>
        ))}</div>
      </div>
    </section>
  )
}
export default Mentors
