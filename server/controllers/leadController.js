const Lead = require("../models/Lead")

const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body)
    res.status(201).json({ success: true, data: lead })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}

const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort("-createdAt")
    res.status(200).json({ success: true, count: leads.length, data: leads })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

module.exports = { createLead, getLeads }
