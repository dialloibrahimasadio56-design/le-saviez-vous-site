const facts = [
  "Les pieuvres ont 3 cœurs 🐙",
  "Le miel ne se périme jamais 🍯",
  "Les humains partagent 60% d’ADN avec les bananes 🍌",
  "Le cerveau consomme 20% de l’énergie du corps 🧠"
];

let i = 0;

function showFact() {
  document.getElementById("fact").textContent = facts[i];
  i = (i + 1) % facts.length;
}

setInterval(showFact, 4000);
window.onload = showFact;

// partage Facebook
function shareFacebook() {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href,
    "_blank"
  );
}

// compteur visiteurs
let count = localStorage.getItem("visits") || 0;
count++;
localStorage.setItem("visits", count);

window.onload = () => {
  document.getElementById("counter").textContent = count;
  showFact();
};
