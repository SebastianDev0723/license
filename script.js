const openNav = () => {
  document.getElementById("myNav").style.width = "50%";
};

// Function to close the overlay
const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
};

// Event listeners for opening and closing the overlay
document.getElementById("openNavBtn").addEventListener("click", openNav);
document.getElementById("closeNavBtn").addEventListener("click", closeNav);
document.querySelectorAll(".overlay-content a").forEach(link => {
  link.addEventListener("click", closeNav);
});

// Close the overlay if the user clicks anywhere outside of it
window.onclick = function(event) {
  const overlay = document.getElementById("myNav");
  if (event.target == overlay) {
      closeNav();
  }
};