//Fonction pour le menu téléphone
function navTel() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//Fonction Animation lettre à lettre des titres
var textWrapper = document.querySelector(".tarifSofro");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
    targets: ".tarifSofro .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
    })
    .add({
    targets: ".tarifSofro",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
    });


var textWrapper = document.querySelector(".tarifHypno");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
    targets: ".tarifHypno .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
    })
    .add({
    targets: ".tarifHypno",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
    });

var textWrapper = document.querySelector(".tarifYoga");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
    targets: ".tarifYoga .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
    })
    .add({
    targets: ".tarifYoga",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
    });

var textWrapper = document.querySelector(".tarifPaiement");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
    targets: ".tarifPaiement .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
    })
    .add({
    targets: ".tarifPaiement",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
    });

var textWrapper = document.querySelector(".tarifRembou");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
    targets: ".tarifRembou .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
    })
    .add({
    targets: ".tarifRembou",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
    });


//Fonction pour le DarkMode
function darkxlight() {
var element = document.getElementById("darkxlight");
element.classList.toggle("dark");
}

  
    
