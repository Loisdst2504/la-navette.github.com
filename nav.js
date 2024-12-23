document.addEventListener('DOMContentLoaded', () => {
    // Vérification de la connexion du fichier JS
    alert('JavaScript est bien connecté !');
  });
  

  // Script pour ouvrir/fermer le menu burger
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
});


