import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary-600" aria-label="Iyanthiran Edge Home">
            Iyanthiran<span className="text-accent-500">Edge</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-primary-600 transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('courses')} className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Courses</button>
            <button onClick={() => scrollToSection('placements')} className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Placements</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Contact</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919363923506" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">+91 93639 23506</a>
            <button onClick={() => scrollToSection('contact')} className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-200">
              Apply Now
            </button>
          </div>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-primary-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div id="mobile-menu" className={`md:hidden mt-4 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col space-y-4 pb-4 border-b border-slate-200">
            <button onClick={() => { scrollToSection('home'); setIsOpen(false) }} className="text-slate-600 hover:text-primary-600 transition-colors font-medium py-2 text-left">Home</button>
            <button onClick={() => { scrollToSection('about'); setIsOpen(false) }} className="text-slate-600 hover:text-primary-600 transition-colors font-medium py-2 text-left">About</button>
            <button onClick={() => { scrollToSection('courses'); setIsOpen(false) }} className="text-slate-600 hover:text-primary-600 transition-colors font-medium py-2 text-left">Courses</button>
            <button onClick={() => { scrollToSection('placements'); setIsOpen(false) }} className="text-slate-600 hover:text-primary-600 transition-colors font-medium py-2 text-left">Placements</button>
            <button onClick={() => { scrollToSection('contact'); setIsOpen(false) }} className="text-slate-600 hover:text-primary-600 transition-colors font-medium py-2 text-left">Contact</button>
          </div>
          <div className="flex flex-col space-y-4 pt-4">
            <a href="tel:+919363923506" className="text-slate-600 hover:text-primary-600 transition-colors font-medium py-2 text-center">+91 93639 23506</a>
            <button onClick={() => { scrollToSection('contact'); setIsOpen(false) }} className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200">
              Apply Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar