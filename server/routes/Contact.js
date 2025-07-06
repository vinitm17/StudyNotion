const express = require("express")
const router = express.Router()
const { contactUsController } = require("../controllers/ContactUs")
//if their is post req on /contact route then req is handelded by contactUsController handler
//this process is called mounting 
router.post("/contact", contactUsController)

module.exports = router