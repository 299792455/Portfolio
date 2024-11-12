const Projet = require('../models/projets');
const fs = require('fs');
const path = require('path');

// Création d'un projet
exports.createProjet = (req, res, next) => {
    const projet = new Projet({
        userId: req.auth.userId,  // Utilise l'ID de l'utilisateur authentifié
        title: req.body.title,
        description: req.body.description,
        technologies: req.body.technologies || [],
        githubLink: req.body.githubLink || '',
        imageUrls: req.optimizedImage ? [req.optimizedImage.path] : [],  // Ajoute le chemin de l'image si optimisée
        date: new Date()
    });

    projet.save()
        .then(() => res.status(201).json({ message: 'Projet créé !' }))
        .catch(error => res.status(400).json({ error }));
};

// Récupérer tous les projets
exports.getAllProjet = (req, res, next) => {
    Projet.find()
        .then(projets => res.status(200).json(projets))
        .catch(error => res.status(400).json({ error }));
};

// Récupérer un projet par ID
exports.getProjetById = (req, res, next) => {
    Projet.findOne({ _id: req.params.id })
        .then(projet => {
            if (!projet) {
                return res.status(404).json({ message: 'Projet non trouvé !' });
            }
            res.status(200).json(projet);
        })
        .catch(error => res.status(500).json({ error }));
};

// Mise à jour d'un projet avec gestion de l'image
exports.updateProjet = (req, res, next) => {
    Projet.findOne({ _id: req.params.id, userId: req.auth.userId })
        .then(projet => {
            if (!projet) {
                return res.status(404).json({ message: 'Projet non trouvé ou non autorisé !' });
            }

            const updateData = {
                title: req.body.title,
                description: req.body.description,
                technologies: req.body.technologies,
                githubLink: req.body.githubLink,
                date: new Date()  // Mets à jour la date de modification
            };

            // Vérifie si une nouvelle image est uploadée et supprime l'ancienne
            if (req.optimizedImage) {
                if (projet.imageUrls && projet.imageUrls.length > 0) {
                    // Suppression de l'ancienne image
                    const oldImage = projet.imageUrls[0];
                    const oldImagePath = path.join(__dirname, '..', 'images', path.basename(oldImage));

                    fs.unlink(oldImagePath, (err) => {
                        if (err) {
                            console.error(`Erreur lors de la suppression de l'ancienne image : ${oldImage}`, err);
                        } else {
                            console.log(`Ancienne image ${oldImage} supprimée avec succès`);
                        }
                    });
                }

                // Ajoute la nouvelle image optimisée dans les données de mise à jour
                updateData.imageUrls = [req.optimizedImage.path];
            }

            // Mettre à jour le projet dans la base de données
            Projet.updateOne({ _id: req.params.id }, updateData)
                .then(result => {
                    if (result.nModified === 0) {
                        return res.status(404).json({ message: 'Projet non trouvé ou non autorisé !' });
                    }
                    res.status(200).json({ message: 'Projet mis à jour !' });
                })
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

// Suppression d'un projet et de ses images associées
exports.deleteProjet = (req, res, next) => {
    Projet.findOne({ _id: req.params.id, userId: req.auth.userId })
        .then(projet => {
            if (!projet) {
                return res.status(404).json({ message: 'Projet non trouvé ou non autorisé !' });
            }

            // Suppression des images associées
            if (projet.imageUrls && projet.imageUrls.length > 0) {
                projet.imageUrls.forEach(imageUrl => {
                    const filename = path.basename(imageUrl);
                    const filepath = path.join(__dirname, '..', 'images', filename);
                    
                    fs.unlink(filepath, (err) => {
                        if (err) {
                            console.error(`Erreur lors de la suppression de l'image ${filename} :`, err);
                        } else {
                            console.log(`Image ${filename} supprimée avec succès`);
                        }
                    });
                });
            }

            // Suppression du projet dans la base de données
            Projet.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Projet supprimé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};
