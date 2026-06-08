import React from "react"
import { motion } from "framer-motion"
import Button from "../ui/Button.jsx"

const Hero = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen bg-gradient-to-br from-primary-600 to-teal-600 pt-24 pb-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-96px)]">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">From Student to Digital Marketing Professional</h1>
          <p className="text-xl text-blue-100 mb-8">9-Month Job-Assisted Program. Learn from industry experts, build real campaigns, and secure your dream role.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[{n: "12,000+", l: "Students"}, {n: "3,500+", l: "Placed"}, {n: "98%", l: "Success"}, {n: "?4.2LPA", l: "Avg Salary"}].map((s, i) => (
              <div key={i} className="text-center"><div className="text-2xl font-bold text-white">{s.n}</div><div className="text-sm text-blue-200">{s.l}</div></div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="text-lg px-8 py-4">Apply Now</Button>
            <Button variant="secondary" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm">Watch Demo</Button>
          </div>
        </motion.div>
        <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Your Career Guidance Call</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-300" />
              <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl border border-slate-300" />
              <select className="w-full px-4 py-3 rounded-xl border border-slate-300"><option>Select Qualification</option></select>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-300"><option>Digital Marketing</option></select>
              <Button variant="primary" className="w-full text-lg py-4">Get Free Career Guidance</Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default Hero
