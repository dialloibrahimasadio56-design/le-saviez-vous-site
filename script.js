/* =========================
   LE SAVIEZ-VOUS - SCRIPT JS
   ========================= */

// 📌 Données des vidéos (tu peux ajouter les tiennes ici)
const videos = [
  {
    title: "Un fait incroyable sur l’espace",
    desc: "Découvre un mystère fascinant de l’univers.",
    img: "https://source.unsplash.com/400x300/?space"
  },
  {
    title: "La Terre cache un secret",
    desc: "Un phénomène que très peu de gens connaissent.",
    img: "https://source.unsplash.com/400x300/?earth"
  },
  {
    title: "Les océans sont étranges",
    desc: "Des créatures inconnues vivent encore ici.",
    img: "https://source.unsplash.com/400x300/?ocean"
  }
];

// 📌 Sélection de la grille
const grid = document.getElementById("videoGrid");

// 📌 Fonction pour afficher les vidéos
function loadVideos() {
  videos.forEach(video => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${video.img}" alt="${video.title}">
      <h3>${video.title}</h3>
      <p>${video.desc}</p>
    `;

    grid.appendChild(card);
  });
}

// 📌 Charger les vidéos au démarrage
document.addEventListener("DOMContentLoaded", loadVideos);
