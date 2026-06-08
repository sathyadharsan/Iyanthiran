import React from "react"
import { motion } from "framer-motion"
import { Briefcase, BookOpen, Users, Cpu, Award } from "lucide-react"
import Card from "../ui/Card.jsx"

const WhyIyanthiran = ({ id }) => {
  const reasons = [
    { icon: Briefcase, title: "Industry-Aligned Curriculum", description: "Built with hiring managers from top companies" },
    { icon: BookOpen, title: "Real Projects", description: "Execute live campaigns with real budgets" },
    { icon: Users, title: "100% Placement Support", description: "Dedicated team with 3500+ hiring partners" },
    { icon: Cpu, title: "AI-First Training", description: "Master tools used by Fortune 500 companies" },
    { icon: Award, title: "Expert Mentors", description: "Learn from industry veterans with 8-20 years experience" }
  ]
  return (
<section id={id} className="py-20 bg-white scroll-mt-24">
       <div className="container mx-auto px-6">
         <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Students Choose Iyanthiran Edge</h2>
         </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{reasons.map((r, i) => (
          <Card key={i}><motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <r.icon className="w-7 h-7 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{r.title}</h3>
            <p className="text-slate-600">{r.description}</p>
          </motion.div></Card>
        ))}</div>
      </div>
    </section>
  )
}
export default WhyIyanthiran
