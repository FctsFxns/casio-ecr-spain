$(function() {
	var slider = $(".promo-section");
  slider.slick({
		autoplay: true,
	  autoplaySpeed: 4000,
	  speed: 1000,
		arrows: false,
		dots: true,
		pauseOnDotsHover: true,
		slidesToShow: 1,
		customPaging : function(slider, i) {
			var title = $(slider.$slides[i]).data('title');
			return '<span>'+title+'</span>';
		},
  });

  // It's fine, but 'pauseOnDotsHover' and 'pauseOnHover' stops working, then it doesn't works for us. 
	// var durationList = $('.promo-item', slider).map(function(index, item) {
	//   return item.getAttribute('data-time');
	// });

	// var slideIndex = 0;
	// var changeSlide = function(timing) {
	//   setTimeout(function() {
	//     if (timing !== 0) {
	//       slider.slick('slickNext');
	//     }
	//     if (slideIndex >= durationList.length) slideIndex = 0;
	//     changeSlide(durationList[slideIndex++]);

	//   }, timing);
	// }
	// changeSlide(0);


  $(".promo-item-content p").addClass("hidden-2xs");
});