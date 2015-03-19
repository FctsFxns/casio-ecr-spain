// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
  $.cookieCuttr({
    cookieNotificationLocationBottom: true,
    cookieAnalytics: true,
    cookieDeclineButton: false,
    cookieAnalyticsMessage: "Este sitio usa cookies. Para continuar sin cambiar su configuración, acepta el uso de cookies.",
    cookieAcceptButtonText: "x",
    cookieWhatAreLinkText: "Más información.",
    cookieWhatAreTheyLink: 'conformidad-con-cookies.html',
    cookieOverlayEnabled: false
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});