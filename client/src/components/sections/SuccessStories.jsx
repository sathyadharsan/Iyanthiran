import React from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const testimonials = [
  { name: "Praveen K.", location: "Chennai", role: "Digital Marketing Executive @ Flipkart", content: "From struggling with job applications to getting placed at Flipkart with 35% salary increase." },
  { name: "Divya S.", location: "Tenkasi", role: "SEO Specialist @ Startup", content: "Coming from a small town, this program gave me the opportunity to work with real clients." },
  { name: "Arjun R.", location: "Madurai", role: "Social Media Manager @ Brand", content: "The hands-on projects and expert mentorship helped me build confidence." }
]

const SuccessStories = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Student Success Stories</h2>
        </motion.div>
<Swiper modules={[Autoplay, Pagination]} spaceBetween={30} slidesPerView={1} autoplay={{ delay: 5000 }} pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }}}
          className="pb-12"
>
          {testimonials.map((t, i) => (
            <SwiperSlide key={t.name}>
              <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                <div className="flex-grow mb-6"><p className="text-slate-700 italic">"{t.content}"</p></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-primary-600">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
export default SuccessStories
