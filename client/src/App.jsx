import React from "react"
import { Routes, Route } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./components/layout/Navbar.jsx"
import Footer from "./components/layout/Footer.jsx"
import HomePage from "./pages/HomePage.jsx"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/digital-marketing" element={<HomePage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
export default App
