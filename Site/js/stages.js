//Fonction pour le menu téléphone
  function navTel() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


//Fonction pour le mouseover
  var panneauDeclencheurs = document.querySelectorAll(".panneauDeclencheur");

    for (let index = 0; index < panneauDeclencheurs.length; index++) {
      const element = panneauDeclencheurs[index];
      element.addEventListener("mouseover", function(event) {
        let panneauDeclencheur = event.target;
        let panneauId = panneauDeclencheur.getAttribute("data-panneau-id");
        let declencheurs = document.querySelectorAll(".panneauDeclencheur");
        for (let index = 0; index < declencheurs.length; index++) {
          declencheurs[index].style.backgroundColor = "#E8DDEA"; // rose
        }
        panneauDeclencheur.style.backgroundColor = "#6297BE"; // bleu
        let panneaux = document.querySelectorAll(".panneauContenu");
        for (let index = 0; index < panneaux.length; index++) {
          const element = panneaux[index];
          if (element.getAttribute("id") == panneauId) {
            element.style.backgroundColor = "#6297BE";//new pour la couleur de fond de panneau contenu quand on passe la souris
            element.style.display = "block";              
          } else {
            element.style.display = "none";
          }
        }
      });
    } 
  

//Technique pour ne pas avoir à reécrire le nom des image et d'avoir des formats d'images différents    (cf carroussel V1)
//Créer un tableau qui contient le chemin vers les images
  var tabImages = ["ressources/stage.jpg", "ressources/stage1.jpg", "ressources/stage2.jpg", "ressources/stage3.jpg"];
//Récupérer l'élément qui contient l'image
  var img = document.querySelector("div#slider>img");
//Déclarer et initialiser la variable index de la valeur 0
//C'est l'indice de l'image affichée sur la page
  var index = 0; 
//Variable du process
  var oprocess;
    window.onload = function (){
//Branchement aux évènements
      document.getElementById("prev").addEventListener("click", function (){
        diaporama(-1);
      }, false);
      document.getElementById("next").addEventListener("click", function (){
        diaporama(1);
      }, false);
//Appel du slider
      diaporama();
    };
//Déclenchement du slider
    function diaporama(sens){
      if(arguments.length == 1){
        clearTimeout(oprocess);
        if((index == 0) && (sens == -1)) {
          index = tabImages.length -1;
        } else if ((index == tabImages.length -1) && (sens == 1)) {
            index = 0;
          } else {
            index = index + parseInt(sens);
          }
        } else if (arguments.length == 0) {
           if (index < tabImages.length -1) {
             index++;
           } else {
             index = 0;
           }
        }
        img.src = tabImages[index];
        oprocess = setTimeout(diaporama, 3000);
      }
    
//Fonction pour le DarkMode
function darkxlight() {
  var element = document.getElementById("darkxlight");
  element.classList.toggle("dark");
}
