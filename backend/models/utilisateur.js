const mongoose = require ('mongoose');

const utilisateurSchema = mongoose.Schema ({
    name: {type:String},
    bio: {type:String},
    profileImage: {type:String}, //url img
    skills: [{type:String}],
    socialLinks: [{type:String}],
});

module.exports = mongoose.model('Utilisateur',utilisateurSchema );
