//Fonction pour le menu téléphone
function navTel() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


// //Fonction animation qui se déclenche quand l'élément est à l'écran
// // Ajoute la classe "bulle_left" pour appliquer l'animation
// function BulleAnimation() {
//   document.getElementById('bulleLeft').classList.add('bulle_left');
// }

// // Check si l'element passé en param est affiché sur l'écran
// function checkVisible(elm) {
//   var rect = elm.getBoundingClientRect();
//   var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
//   return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
// }

// //Regarde si la div "bulleLeft" est affichée toutes les 250ms puis désactive l'interval
// var interval = setInterval(function() {
//     if ( checkVisible(document.getElementById('bulleLeft')))     {
//         BulleAnimation();
//         clearInterval(interval); // Désactive le SetInterval
//     }
// }, 250);


ScrollReveal().reveal('.bulleLeft', { delay: 500 });
ScrollReveal().reveal('.bulleRight', { delay: 500 });
ScrollReveal().reveal('.temoignage',{ delay: 500 });


//Fonction pour le DarkMode
function darkxlight() {
  var element = document.getElementById("darkxlight");
  element.classList.toggle("dark");
}