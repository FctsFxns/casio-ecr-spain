//= require_self


  jQuery(document).ready(function() {
      App.init();
      ContactForm.initContactForm();

      if ($("body").hasClass("page-home-show-demo")) {
          $(window).scroll(function() {
              if ($(window).scrollTop() > $(window).height() * 3)
              {
                  // middle of page hit, load extra content here
                  $.jsdvPopup({
                    icon: '',
                    text: 'Pide que te hagamos una DEMO.',
                    button: '<a href="/contacto" class="btn-u btn-u-blue btn-u-lg btn-u-upper btn-block ">Solicita una demo</a>' 
                  });
                  // Don't repeat
                  $(this).unbind('scroll');
              }
          });
      }

      // Products Carousel
      $('.product-thumbnail .carousel').carousel({
        interval: 0,
        keyboard: false
      }); 

      // Cookie consent
      window.addEventListener("load", function(){
      window.cookieconsent.initialise({
        "palette": {
          "popup": {
            "background": "#eaf7f7",
            "text": "#333"
          },
          "button": {
            "background": "#0057AC",
            "text": "#e7e7e7"
          }
        },
        "position": "bottom",
        "content": {
          "message": "Utilizamos cookies propias y de terceros para mejorar nuestros servicios mediante el análisis de sus hábitos de navegación. Si continua navegando, consideramos que acepta su uso.",
          "dismiss": "De acuerdo",
          "link": "Saber más",
          "href": "/proteccion-de-datos/"
        }
      })});

      // SmoothScroll to Contacto, nyapa!
      var reSmooth = /^#soluciones/;
      var id;
      if (reSmooth.test(location.hash)) {
        // Strip the "#smoothScroll" part off (and put "#" back on the beginning)
        id = '#' + location.hash.replace(reSmooth, '');
        $.smoothScroll({
          scrollTarget: '#soluciones'
        });
      }
      var reSmooth = /^#projects/;
      var id;
      if (reSmooth.test(location.hash)) {
        // Strip the "#smoothScroll" part off (and put "#" back on the beginning)
        id = '#' + location.hash.replace(reSmooth, '');
        $.smoothScroll({
          scrollTarget: '#projects'
        });
      }
      var reSmooth = /^#programa-partners/;
      var id;
      if (reSmooth.test(location.hash)) {
        // Strip the "#smoothScroll" part off (and put "#" back on the beginning)
        id = '#' + location.hash.replace(reSmooth, '');
        $.smoothScroll({
          scrollTarget: '#programa-partners'
        });
      }

      // Show more 'noticias' button
      $("#projects div.row-projects:not(:first)").hide();
      $("#projects div.row-more a.btn-more").click(function(e){
        e.preventDefault();
        $("#projects div.row-projects:not(:first)").slideToggle();
        $(this).toggle();
      }).show();
  });