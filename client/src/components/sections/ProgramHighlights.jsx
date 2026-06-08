import React from "react"
import { motion } from "framer-motion"
import { Clock, Monitor, Folder, Award as Certificate, Briefcase } from "lucide-react"

const ProgramHighlights = ({ id }) => {
  const highlights = [
    { icon: Clock, title: "Duration", value: "9 Months" },
    { icon: Monitor, title: "Format", value: "Weekend Live Classes" },
    { icon: Folder, title: "Projects", value: "5+ Real Projects" },
    { icon: Certificate, title: "Certifications", value: "Industry Recognized" },
    { icon: Briefcase, title: "Placement", value: "100% Job Support" }
  ]
return (
    <section id={id} className="py-20 bg-gradient-to-r from-primary-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6">{highlights.map((h, i) => (
          <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl px-8 py-6 shadow-md flex items-center space-x-4 min-w-[280px]">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center"><h.icon className="w-6 h-6 text-primary-600" /></div>
            <div><div className="text-sm text-slate-500">{h.title}</div><div className="text-lg font-semibold text-slate-900">{h.value}</div></div>
          </motion.div>
        ))}</div>
      </div>
    </section>
  )
}
export default ProgramHighlights
