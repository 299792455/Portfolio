const mongoose = require ('mongoose');

const projetSchema = mongoose.Schema({
    userId: { type: String, required: true},
    title: {type: String, required:true},
    description: {type: String, required:true},
    technologies: [{type: String}],
    githubLink: { type: String },
    imageUrls: [{ type: String }],
    date: { type: Date }
    // Quoi d'autres ?
});



module.exports = mongoose.model('Projet', projetSchema);