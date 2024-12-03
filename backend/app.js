require('dotenv').config();
const emailRoutes = require('./routes/emailRoutes');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const utilisateurRoutes = require('./routes/utilisateurRoute');
const projetRoutes = require('./routes/projetsRoute');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.URLBDD)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
    
// Gestion des en-têtes CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Routes
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/projets', projetRoutes);
app.use('/api/contact', emailRoutes);

// Gestion des fichiers statiques
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
