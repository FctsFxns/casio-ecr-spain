//= require_self

  $(function() {
    setTimeout(function() {
      if (location.hash) {
        /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
        window.scrollTo(0, 0);
        target = location.hash.split('#');
        smoothScrollTo($('#'+target[1]));
      }
    }, 1);
    
    // taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        smoothScrollTo($(this.hash));
        return false;
      }
    });
    
    function smoothScrollTo(target) {
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 110
        }, 1000);
      }
    }
  });

  jQuery(document).ready(function() {
      App.init();
      ContactForm.initContactForm();

      // Products Carousel x3
      $('.product-thumbnail .carousel').carousel({
        interval: false,
        keyboard: false
      }); 

      // Show more 'noticias' button
      $("#projects div.row-projects:not(:first)").hide();
      $("#projects div.row-more a.btn-more").click(function(e){
        e.preventDefault();
        $("#projects div.row-projects:not(:first)").slideToggle();
        $(this).toggle();
      }).show();

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

      // Show 'Solicita una demo' popup
      if ($("body").hasClass("page-home-show-demo")) {
        $(window).scroll(function() {
          if ($(window).scrollTop() > $(window).height() * 3)
          {
            // // middle of page hit, load extra content here
            $.jsdvPopup({
              icon: '',
              text: 'Pide que te hagamos una DEMO.',
              button: '<a href="http://bit.ly/casioayuda" class="btn-u btn-u-blue btn-u-lg btn-u-upper btn-block ">Solicita una demo</a>' 
            });
            // Don't repeat
            $(this).unbind('scroll');
          }
        });
      }


  });
