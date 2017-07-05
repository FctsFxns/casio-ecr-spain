$(function() {
  $(".promo-section").slick({
		autoplay: true,
	  autoplaySpeed: 4000,
		arrows: false,
		dots: true,
		pauseOnDotsHover: true,
		slidesToShow: 1,
		customPaging : function(slider, i) {
			var title = $(slider.$slides[i]).data('title');
			return '<span>'+title+'</span>';
		},
  });

  $(".promo-item-content p").addClass("hidden-2xs");
});