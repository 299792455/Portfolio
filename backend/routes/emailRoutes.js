const express = require ('express');
const router = express.Router();
const emailControl = require ('../controleur/emailControl');

router.post('/send-email', emailControl.sendEmail);



module.exports = router;