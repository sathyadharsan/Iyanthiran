const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const connectDB = require("./config/db")

const leadRoutes = require("./routes/leads")
const contactRoutes = require("./routes/contact")
const demoRoutes = require("./routes/demo")

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/leads", leadRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/demo", demoRoutes)

app.get("/", (req, res) => {
  res.json({ message: "Iyanthiran API Running" })
})

module.exports = app
