const sendEmail = require('../middleware/emailService');

exports.sendEmail = async (req, res) => {
  const { to, subject, message, company  } = req.body;

  if (company && company.trim() !== '') {
  console.warn('Tentative de spam détectée via honeypot.');
  return res.status(400).json({ error: 'Requête invalide.' });
}

  try {
    await sendEmail(to, subject, message);
    res.status(200).json({ message: 'Email envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
  }
};