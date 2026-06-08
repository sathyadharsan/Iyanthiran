import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const FAQ = ({ id }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "Is this program suitable for beginners?",
      a: "Yes! Our 9-month program starts from fundamentals and progresses to advanced strategies. No prior marketing experience needed."
    },
    {
      q: "What is the job assistance guarantee?",
      a: "We provide dedicated placement support including resume building, mock interviews, and direct company referrals. 98% placement rate for active job seekers."
    },
    {
      q: "Can I learn while working full-time?",
      a: "Absolutely. Classes are designed for working professionals with weekend batches and recorded sessions for flexible learning."
    },
    {
      q: "What tools will I learn?",
      a: "Google Analytics, Google Ads, Meta Ads Manager, SEMrush, Ahrefs, Canva, Mailchimp, and more industry-standard tools."
    },
    {
      q: "Is there a certification?",
      a: "Yes, you'll receive Iyanthiran Edge certification plus preparation for Google Ads, Meta Blueprint, and HubSpot certifications."
    },
    {
      q: "What's the average salary after placement?",
      a: "Our graduates secure roles with average packages of 4.2 LPA, with top performers reaching 8+ LPA in their first role."
    }
  ]

  return (
    <section id={id || "faq"} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to know before starting your journey</p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="border-b border-slate-200 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                aria-expanded={openIndex === i}
              >
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-lg font-semibold text-slate-900 pr-4">{faq.q}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-6 pl-8 border-l-2 border-primary-100 ml-8">
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FAQ