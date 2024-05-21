// toggler navbar meniu
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  var navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  } else {
    navbarCollapse.classList.add('show');
  }
});


// navigatie produse meniu
const openNav = () => {
  document.getElementById("myNav").style.width = "33%";
};

const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
};

document.getElementById("openNavBtn").addEventListener("click", openNav);
document.getElementById("closeNavBtn").addEventListener("click", closeNav);
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", closeNav);
});
