//Fonction pour le menu téléphone
function navTel() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//Fonction Highlight du menu de navigation
(function () {
//////////////////////
	// Utils
  //////////////////////
  function throttle(fn, delay, scope) {
    // Default delay
    delay = delay || 250;
    var last, defer;
    return function () {
        var context = scope || this,
            now = +new Date(),
            args = arguments;
        if (last && now < last + delay) {
            clearTimeout(defer);
            defer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, delay);
        } else {
            last = now;
            fn.apply(context, args);
        }
    }
}

function extend(destination, source) {
    for (var k in source) {
        if (source.hasOwnProperty(k)) {
            destination[k] = source[k];
        }
    }
    return destination;
}

//////////////////////
// END Utils
//////////////////////

//////////////////////
// Scroll Module
//////////////////////

var ScrollManager = (function () {

    var defaults = {

            steps: null,
            navigationContainer: null,
            links: null,
            scrollToTopBtn: null,

            navigationElementClass: '.Quick-navigation',
            currentStepClass: 'current',
            smoothScrollEnabled: true,
            stepsCheckEnabled: true,

            // Callbacks
            onScroll: null,

            onStepChange: function (step) {
                var self = this;
                var relativeLink = [].filter.call(options.links, function (link) {
                    link.classList.remove(self.currentStepClass);
                    return link.hash === '#' + step.id;
                });
                relativeLink[0].classList.add(self.currentStepClass);
            },

            // // Provide a default scroll animation
            smoothScrollAnimation: function (target) {
            $('html, body').animate({
                     scrollTop: target
                 }, 'slow');
             }
        },

        options = {};

    // Privates
    var _animation = null,
        currentStep = null,
        throttledGetScrollPosition = null;

    return {

        scrollPosition: 0,

        init: function (opts) {

            options = extend(defaults, opts);

            if (options.steps === null) {
                console.warn('Smooth scrolling require some sections or steps to scroll to :)');
                return false;
            }

            // Allow to customize the animation engine ( jQuery / GSAP / velocity / ... )
            _animation = function (target) {
                target = typeof target === 'number' ? target : $(target).offset().top;
                return options.smoothScrollAnimation(target);
            };

            // Activate smooth scrolling
            if (options.smoothScrollEnabled)  this.smoothScroll();

            // Scroll to top handling
            if (options.scrollToTopBtn) {
                options.scrollToTopBtn.addEventListener('click', function () {
                    options.smoothScrollAnimation(0);
                });
            }

            // Throttle for performances gain
            throttledGetScrollPosition = throttle(this.getScrollPosition).bind(this);
            window.addEventListener('scroll', throttledGetScrollPosition);
            window.addEventListener('resize', throttledGetScrollPosition);

            this.getScrollPosition();
        },

        getScrollPosition: function () {
            this.scrollPosition = window.pageYOffset || window.scrollY;
            if (options.stepsCheckEnabled) this.checkActiveStep();
            if (typeof  options.onScroll === 'function') options.onScroll(this.scrollPosition);
        },

        scrollPercentage: function () {
            var body = document.body,
                html = document.documentElement,
                documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight);

            var percentage = Math.round(this.scrollPosition / (documentHeight - window.innerHeight) * 100);
            if (percentage < 0)  percentage = 0;
            if (percentage > 100)  percentage = 100;
            return percentage;
        },

        doSmoothScroll: function (e) {
            if (e.target.nodeName === 'A') {
                e.preventDefault();
                if (location.pathname.replace(/^\//, '') === e.target.pathname.replace(/^\//, '') && location.hostname === e.target.hostname) {
                    var targetStep = document.querySelector(e.target.hash);
                    targetStep ? _animation(targetStep) : console.warn('Hi! You should give an animation callback function to the Scroller module! :)');
                }
            }
        },

        smoothScroll: function () {
            if (options.navigationContainer !== null) options.navigationContainer.addEventListener('click', this.doSmoothScroll);
        },

        checkActiveStep: function () {
            var scrollPosition = this.scrollPosition;

            [].forEach.call(options.steps, function (step) {
                var bBox = step.getBoundingClientRect(),
                    position = step.offsetTop,
                    height = position + bBox.height;

                if (scrollPosition >= position && scrollPosition < height && currentStep !== step) {
                    currentStep = step;
                    step.classList.add(self.currentStepClass);
                    if (typeof options.onStepChange === 'function') options.onStepChange(step);
                }
                step.classList.remove(options.currentStepClass);
            });
        },

        destroy: function () {
            window.removeEventListener('scroll', throttledGetScrollPosition);
            window.removeEventListener('resize', throttledGetScrollPosition);
            options.navigationContainer.removeEventListener('click', this.doSmoothScroll);
        }
    }
})();
 //////////////////////
 // END scroll Module
 //////////////////////


//////////////////////
// APP init
//////////////////////

var scrollToTopBtn = document.querySelector('.Scroll-to-top'),
    steps = document.querySelectorAll('.js-scroll-step'),
    navigationContainer = document.querySelector('.Quick-navigation'),
    links = navigationContainer.querySelectorAll('.Quick-navigation-item'),
    progressIndicator = document.querySelector('.Scroll-progress-indicator');

ScrollManager.init({
    steps: steps,
    scrollToTopBtn: scrollToTopBtn,
    navigationContainer: navigationContainer,
    links: links,
  
});

//////////////////////
// END APP init
//////////////////////

})();

//Fonction JS de SrollReveal absolument fantastique!!!!
//Texte du bandeau
ScrollReveal().reveal('.logoText', { delay: 4000, duration: 3000 });

//Section votre sophrologue
ScrollReveal().reveal('.overlay-image', { delay: 500, duration: 1000, origin: 'bottom', distance: "50px" });
ScrollReveal().reveal('#votre_sophrologue', { delay: 500, duration: 1000, origin: 'top', distance: "50px" });

//Citations
ScrollReveal().reveal('.citation', { delay: 500, duration: 1500, origin: 'bottom', distance: "50px" });

//Section La sophrologie
ScrollReveal().reveal('#PhotoSofro', { delay: 500, duration: 1000, origin: 'bottom', distance: "50px" });
ScrollReveal().reveal('#La_sophrologie', { delay: 500, duration: 1000, origin: 'top', distance: "50px" });

//Section Yoga du rire
ScrollReveal().reveal('#PhotoYoga', { delay: 500, duration: 1000, origin: 'bottom', distance: "50px" });
ScrollReveal().reveal('#YogaDuRire', { delay: 500, duration: 1000, origin: 'top', distance: "50px" });
//Section Hypnose
ScrollReveal().reveal('#PhotoHypnose', { delay: 500, duration: 1000, origin: 'bottom', distance: "50px" });
ScrollReveal().reveal('#l_hypnose', { delay: 500, duration: 1000, origin: 'top', distance: "50px" });

//Image de la section relaxation
ScrollReveal().reveal('.one', { delay: 500, duration: 2000, origin: 'bottom', distance: "50px" });
ScrollReveal().reveal('.two', { delay: 500, duration: 2500, origin: 'bottom', distance: "50px" });
ScrollReveal().reveal('.three', { delay: 500, duration: 3000, origin: 'bottom', distance: "50px" });
ScrollReveal().reveal('.four', { delay: 500, duration: 3500, origin: 'bottom', distance: "50px" });
ScrollReveal().reveal('.five', { delay: 500, duration: 4000, origin: 'bottom', distance: "50px" });



//Fonction pour faire apparraitre le bouton Up au bout de 200px 
  jQuery(function(){
      $(function () {
      $(window).scroll(function () { //Fonction appelée quand on descend la page
      if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
      $('#boutonUp').css('right','10px'); // Replace à 10pixels de la droite l'image
      } else { 
      $('#boutonUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
      }
      });
      });
      });


//Fonction pour le DarkMode
  function darkxlight() {
    var element = document.getElementById("darkxlight");
    element.classList.toggle("dark");
  }

//Fonction pour que les liens internes srcoll doucement
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

//Fonction pour les boutons lire plus/moins
//Bouton pour La sophrologie
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
      
      if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Lire plus"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Lire moins"; 
      moreText.style.display = "inline";
    }
  }

//Bouton pour Le yoga du rire
  function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
      
      if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "Lire plus"; 
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "Lire moins"; 
      moreText2.style.display = "inline";
    }
  }



 
  