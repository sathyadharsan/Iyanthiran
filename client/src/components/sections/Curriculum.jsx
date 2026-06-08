import React from "react"
import { motion } from "framer-motion"
import { BookOpen, Search, ChartBarBig, Cpu, Briefcase } from "lucide-react"

const curriculumData = [
  { phase: "Foundation", duration: "Months 1-2", title: "Marketing Fundamentals", skills: ["Consumer Psychology", "Brand Strategy", "Digital Marketing Basics"] },
  { phase: "Digital Channels", duration: "Months 3-4", title: "SEO, Social Media & Paid Ads", skills: ["SEO Optimization", "Google Ads", "Meta Ads"] },
  { phase: "Analytics", duration: "Months 5-6", title: "Data-Driven Marketing", skills: ["Google Analytics 4", "Conversion Optimization", "Marketing ROI"] },
  { phase: "AI Marketing", duration: "Months 7-8", title: "AI-Powered Marketing", skills: ["AI Content Creation", "Predictive Analytics", "Marketing Automation"] },
  { phase: "Placement", duration: "Month 9", title: "Career Readiness", skills: ["Portfolio Building", "Resume Writing", "Interview Prep"] }
]

const icons = [BookOpen, Search, ChartBarBig, Cpu, Briefcase]

const Curriculum = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Your Learning Journey</h2>
        </motion.div>
        <div className="max-w-4xl mx-auto">{curriculumData.map((m, i) => {
          const Icon = icons[i]
          return (
            <motion.div key={i} initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="relative mb-12 last:mb-0">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center"><Icon className="w-8 h-8 text-white" /></div>
                <div className="flex-grow bg-slate-50 rounded-2xl p-6">
                  <div className="text-sm font-medium text-primary-600 mb-2">{m.duration}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{m.title}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">{m.skills.map((s, idx) => (
                    <li key={idx} className="flex items-center text-slate-600"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>{s}</li>
                  ))}</ul>
                </div>
              </div>
            </motion.div>
          )
        })}</div>
      </div>
    </section>
  )
}
export default Curriculum
