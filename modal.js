
  // Obține elementele modal
  var modal1 = document.getElementById("myModal");
  var modal2 = document.getElementById("myModal2");

  // Obține toate imaginile care deschid modalul
  var imgs1 = document.querySelectorAll(".deal-condition");
  var imgs2 = document.querySelectorAll(".deal-condition2");

  // Obține elementele <span> care închid modalul
  var span1 = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close")[1];

  // Adaugă un event listener pentru fiecare imagine din deal-condition
  imgs1.forEach(function(img) {
    img.onclick = function() {
      modal1.style.display = "block";
    }
  });

  // Adaugă un event listener pentru fiecare imagine din deal-condition2
  imgs2.forEach(function(img) {
    img.onclick = function() {
      modal2.style.display = "block";
    }
  });

  // Când utilizatorul dă click pe <span> (x) în myModal, închide myModal
  span1.onclick = function() {
    modal1.style.display = "none";
  }

  // Când utilizatorul dă click pe <span> (x) în myModal2, închide myModal2
  span2.onclick = function() {
    modal2.style.display = "none";
  }

  // Când utilizatorul dă click oriunde în afara modalului, închide-l
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    } else if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }
