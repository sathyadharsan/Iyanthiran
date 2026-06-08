import React from "react"
import { motion } from "framer-motion"
import { Users, Award, TrendingUp, Briefcase } from "lucide-react"
import StatCard from "../ui/StatCard.jsx"

const TrustSignals = ({ id }) => {
  const stats = [
    { number: "12,000+", label: "Students Trained", icon: Users },
    { number: "3,500+", label: "Successfully Placed", icon: Briefcase },
    { number: "98%", label: "Placement Rate", icon: TrendingUp },
    { number: "4.2LPA", label: "Average Salary", icon: Award }
  ]
  return (
    <section id={id} className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Trusted by Students Across Tamil Nadu</h2>
          <p className="text-lg text-slate-600">Join thousands who transformed their careers</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{stats.map((s, i) => <StatCard key={i} number={s.number} label={s.label} icon={s.icon} delay={i * 0.1} />)}</div>
      </div>
    </section>
  )
}
export default TrustSignals
