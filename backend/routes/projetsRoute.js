const express = require('express');
const router = express.Router();
const projetsControl = require('../controleur/projetsControl');
const multer = require ('../middleware/config-multer');
const auth = require ('../middleware/auth');

router.post('/', auth, multer, projetsControl.createProjet); 
router.get('/:id', projetsControl.getProjetById); 
router.get('/', projetsControl.getAllProjet); 
router.put('/:id', auth, multer, projetsControl.updateProjet); 
router.delete('/:id', auth, projetsControl.deleteProjet); 

module.exports = router;