import React from "react"
import { Link } from "react-router-dom"
import { ExternalLink, Mail, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">Iyanthiran<span className="text-accent-500">Edge</span></Link>
            <p className="text-slate-300 mb-4">Career guidance platform empowering Tamil Nadu students to transform from learners to industry-ready professionals.</p>
<div className="flex space-x-4">
               <a href="#" className="text-slate-300 hover:text-accent-500"><ExternalLink className="w-5 h-5" /></a>
               <a href="#" className="text-slate-300 hover:text-accent-500"><ExternalLink className="w-5 h-5" /></a>
               <a href="#" className="text-slate-300 hover:text-accent-500"><ExternalLink className="w-5 h-5" /></a>
               <a href="#" className="text-slate-300 hover:text-accent-500"><ExternalLink className="w-5 h-5" /></a>
             </div>
          </div>
          <div><h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">{["Home", "About", "Courses", "Placements", "Contact"].map(item => (
              <li key={item}><Link to="/" className="text-slate-300 hover:text-accent-500">{item}</Link></li>
            ))}</ul>
          </div>
          <div><h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">{["Digital Marketing", "Full Stack Development", "Python Programming", "Business Management"].map(item => (
              <li key={item}><Link to="/" className="text-slate-300 hover:text-accent-500">{item}</Link></li>
            ))}</ul>
          </div>
          <div><h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3"><Phone className="w-4 h-4 text-accent-500" /><span>+91 93639 23506</span></div>
              <div className="flex items-center space-x-3"><Mail className="w-4 h-4 text-accent-500" /><span>info@iyanthiran.com</span></div>
              <p className="text-slate-300 text-sm">Vaazhai Incubator, Tenkasi, Tamil Nadu</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-slate-400">
          <p>&copy; 2024 Iyanthiran Edge Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
