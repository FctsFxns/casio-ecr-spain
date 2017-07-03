//= require_self


  jQuery(document).ready(function() {
      App.init();
      ContactForm.initContactForm();

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
        "position": "bottom-right",
        "content": {
          "message": "Este sitio web utiliza cookies. Si continua navegando acepta nuestra política de privacidad.",
          "dismiss": "De acuerdo",
          "link": "Saber más",
          "href": "/politica-de-privacidad/"
        }
      })});

     // SmoothScroll to Contacto, nyapa!
      var reSmooth = /^#contacto/;
      var id;
      if (reSmooth.test(location.hash)) {
        // Strip the "#smoothScroll" part off (and put "#" back on the beginning)
        id = '#' + location.hash.replace(reSmooth, '');
        $.smoothScroll({
          scrollTarget: '#contacto'
        });
      }

  });