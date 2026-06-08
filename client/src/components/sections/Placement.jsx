import React from "react"
import { motion } from "framer-motion"
import { BookOpen, Folder, Users, MessageCircle, Briefcase } from "lucide-react"

const Placement = ({ id }) => {
  const steps = [
    { icon: BookOpen, title: "Learn", description: "Master digital marketing skills" },
    { icon: Folder, title: "Build", description: "Create real portfolio projects" },
    { icon: Users, title: "Practice", description: "Mock interviews & resume prep" },
    { icon: MessageCircle, title: "Interview", description: "Get interview ready" },
    { icon: Briefcase, title: "Place", description: "Secure your dream job" }
  ]
  return (
<section id={id} className="py-20 bg-gradient-to-br from-primary-600 to-teal-600 scroll-mt-24">
       <div className="container mx-auto px-6">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Your Path to Employment</h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">{steps.map((s, i) => (
          <motion.div key={s.title} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="text-center">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <s.icon className="w-10 h-10 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
            <p className="text-blue-100">{s.description}</p>
          </motion.div>
        ))}</div>
      </div>
    </section>
  )
}
export default Placement
