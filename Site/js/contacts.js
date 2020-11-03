//Fonction pour le menu téléphone
function navTel() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


// Script pour que TOUS les champs requis se mette en rouge si ils ne sont pas rempli
let elementsRequis = document.querySelectorAll("input:required");
for (let index = 0; index < elementsRequis.length; index++) {
    let nomElement = elementsRequis[index];
    nomElement.addEventListener("blur", function(event){ // Element Blur : perd le focus
    nomElement=event.target;
    let nom = nomElement.value;
//Vérifier et effacer les blancs dans la valeur avec la fonction trim
    nom=nom.trim(); 
    if (nom.length == 0) {
        nomElement.style.background = "red";
        //alert("Veuillez remplir le champs")
        //nomElement.focus(); Pas supporté par Firefox
    }
    else{
        nomElement.style.background = "white"
    }
});
}

//Validation du champs email : cf HTML
let email = document.getElementById("email");
email.addEventListener("keyup", function(){  //Keyup permettra de valider à chaque fois qu'on rentre un caractère
    let emailValeur = email.value;
    let motif = /^[a-zA-Z0-9]+\.?[a-zA-Z0-9]*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    if (motif.test(emailValeur)){
        email.style.background = "white"
    } else{
        email.style.background = "red"
    }
})

//Fonction pour le DarkMode
function darkxlight() {
    var element = document.getElementById("darkxlight");
    element.classList.toggle("dark");
  }