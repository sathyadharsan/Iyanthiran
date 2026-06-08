~const Demo = require("../models/Demo")

const createDemo = async (req, res) => {
  try {
    const demo = await Demo.create(req.body)
    res.status(201).json({ success: true, data: demo })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}

const getDemos = async (req, res) => {
  try {
    const demos = await Demo.find().sort("-createdAt")
    res.status(200).json({ success: true, count: demos.length, data: demos })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

module.exports = { createDemo, getDemos }
