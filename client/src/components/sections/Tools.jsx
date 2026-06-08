import React from "react"
import { motion } from "framer-motion"
import { Code, ChartBar, Search, Target, Globe, Smartphone } from "lucide-react"
import Card from "../ui/Card.jsx"

const Tools = ({ id }) => {
  const tools = [
    { name: "Google Analytics", icon: ChartBar, category: "Analytics", color: "bg-orange-100 text-orange-600" },
    { name: "Google Ads", icon: Target, category: "Advertising", color: "bg-green-100 text-green-600" },
    { name: "Meta Ads Manager", icon: Smartphone, category: "Social Ads", color: "bg-blue-100 text-blue-600" },
    { name: "SEMrush", icon: Search, category: "SEO", color: "bg-purple-100 text-purple-600" },
    { name: "Ahrefs", icon: Globe, category: "SEO", color: "bg-pink-100 text-pink-600" },
    { name: "Canva", icon: Code, category: "Design", color: "bg-teal-100 text-teal-600" },
  ]

  return (
    <section id={id || "tools"} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Industry Tools You'll Master</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Hands-on experience with the same tools top companies use daily</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <Card key={tool.name} delay={i * 0.1} className="p-6 flex items-center space-x-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${tool.color}`}>
                <tool.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{tool.name}</h3>
                <p className="text-sm text-slate-500">{tool.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Tools