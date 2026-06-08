import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Button from "../ui/Button.jsx"

const FinalCTA = ({ id }) => {
  return (
    <section id={id || "contact"} className="py-20 bg-gradient-to-br from-primary-600 to-teal-600 scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-blue-100 mb-10">Join 12,000+ students who launched their digital marketing careers with Iyanthiran Edge</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 93639 23506
            </Button>
            <Button variant="primary" className="text-lg px-8 py-4">
              <Mail className="w-5 h-5 mr-2" />
              Email: info@iyanthiran.com
            </Button>
          </div>

          <Button variant="primary" size="lg" className="w-full sm:w-auto mx-auto inline-flex items-center justify-center gap-2 text-lg px-10 py-5">
            Apply Now for Free Career Guidance
            <ArrowRight className="w-5 h-5" />
          </Button>

          <p className="mt-6 text-blue-200 text-sm">Vaazhai Incubator, Tenkasi, Tamil Nadu | No cost for career guidance call</p>
        </motion.div>
      </div>
    </section>
  )
}
export default FinalCTA