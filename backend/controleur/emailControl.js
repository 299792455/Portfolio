const sendEmail = require('../middleware/emailService');

exports.sendEmail = async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    await sendEmail(to, subject, message);
    res.status(200).json({ message: 'Email envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
  }
};