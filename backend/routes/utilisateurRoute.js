const express = require ('express');
const router = express.Router();
const utilisateurControl = require ('../controleur/utilisateurControl');

router.post ('/signup', utilisateurControl.signup);
router.post ('/login', utilisateurControl.login);


module.exports = router;