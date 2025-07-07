const nodemailer = require('nodemailer');



const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,          
        pass: process.env.EMAIL_PASSWORD,  
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      text,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès');
    return result;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    throw error;
  }
};

module.exports = sendEmail;
