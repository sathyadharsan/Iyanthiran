import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Code, Users, Target, Globe } from "lucide-react"
import Card from "../ui/Card.jsx"

const Projects = ({ id }) => {
  const projects = [
    { title: "E-commerce Campaign", desc: "Built & optimized Google Shopping ads for 50% ROAS increase", icon: Target, color: "bg-green-100 text-green-600", tags: ["Google Ads", "Analytics", "Conversion"] },
    { title: "SEO Content Strategy", desc: "Ranked 50+ keywords on page 1 for a SaaS startup", icon: Globe, color: "bg-blue-100 text-blue-600", tags: ["SEO", "Content", "Keywords"] },
    { title: "Social Media Growth", desc: "Grew Instagram from 0 to 25K followers in 6 months", icon: Users, color: "bg-pink-100 text-pink-600", tags: ["Meta Ads", "Content", "Community"] },
    { title: "Email Automation", desc: "Designed drip campaigns with 35% open rate", icon: ArrowUpRight, color: "bg-purple-100 text-purple-600", tags: ["Email", "Automation", "Copywriting"] },
  ]

  return (
    <section id={id || "projects"} className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Real Projects You'll Build</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Portfolio-ready projects with measurable results</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Card key={project.title} delay={i * 0.1} className="p-8">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${project.color} flex-shrink-0`}>
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects