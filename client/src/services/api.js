import axios from "axios"

const api = axios.create({
  baseURL: "/api",
  timeout: 10000
})

export const submitContactForm = async (data) => await api.post("/contact", data)
export const submitLeadForm = async (data) => await api.post("/leads", data)
export const submitDemoBooking = async (data) => await api.post("/demo", data)

export default api
