// Fonction pour partager le site sur Facebook
function shareFacebook() {
    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
}

// Petit message automatique dans la console pour vérifier que tout marche
console.log("Le site 'Le saviez-vous' est opérationnel !");

// Tu pourras ajouter ici plus tard des fonctions pour afficher des faits aléatoires
