document.querySelector('.navbar-toggler').addEventListener('click', function() {
  var navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  } else {
    navbarCollapse.classList.add('show');
  }
});
