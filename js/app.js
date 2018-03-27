// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {
  // $('a[href*=#]:not([href=#])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html,body').animate({
  //         scrollTop: target.offset().top
  //       }, 500);
  //       return false;
  //     }
  //   }
  // });

  window.addEventListener("load", function(){
   window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#efefef",
        "text": "#404040"
      },
      "button": {
        "background": "#8ec760",
        "text": "#ffffff"
      }
    },
    "type": "opt-out",
    "revokable": true,
    onInitialise: function (status) {
            var type = this.options.type;
            var didConsent = this.hasConsented();
            if (type == 'opt-in' && didConsent) {
              // enable cookies
              window['ga-disable-UA-16011780-5'] = false;                 
            }
            if (type == 'opt-out' && !didConsent) {
              window['ga-disable-UA-16011780-5'] = true;                  
            }
          },
    onStatusChange: function(status, chosenBefore) {
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        window['ga-disable-UA-16011780-5'] = false;                 
      }
      if (type == 'opt-out' && !didConsent) {
        window['ga-disable-UA-16011780-5'] = true;                  
      }
    },
    onRevokeChoice: function() {
      var type = this.options.type;
      if (type == 'opt-in') {
        window['ga-disable-UA-16011780-5'] = true;                  
      }
      if (type == 'opt-out') {
        window['ga-disable-UA-16011780-5'] = false;                 
      }
    },
    "content": {
      "message": "Durante la navegación se instalarán cookies de terceros con la finalidad de facilitar esta navegación, compartir contenidos y realizar seguimiento y estadísticas del uso de la web. Si continua navegando, entenderemos que acepta la instalación de las mencionadas cookies.",
      "dismiss": "Aceptar",
      "deny": "Rechazar",
      "link": "Más información",
      "href": "./politica-de-cookies.php"
    }       
  })});

});


