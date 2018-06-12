(function ($) {
    var popupHtml = '<div class="popup"><div class="inner"><div class="close">X</div><span></span><p></p></div></div>';

    $.jsdvPopup = function (options) {

        //default params
        options = $.extend({
            // Removed the 'img' element
            // icon: 'images/icons/skype-64.png',
            text: "Hello!This is my first popup notification! Hope you'l like it!",
            button: "&nbsp;",
            timeout: 5000
        }, options);
        //create and show message
        var $elem = $(popupHtml);
        // Removed the 'img' element
        // $elem.find('img').attr("src", options.icon);
        $elem.find('span').text(options.text);
        $elem.find('p').html(options.button);
        $elem.appendTo($('body'));

        show($elem);

        //click handler
        $elem.find('.close').on('click', function () {
            hide.call($(this).parent());
        });

        //setup timer
        // setTimeout(function () {
        //     hide.call($elem);
        // }, options.timeout);

        function show(elem) {
            elem.css({'bottom': -1 * elem.outerHeight(), "display": 'block'});
            elem.animate({'bottom': 10}, "slow");
        }

        function hide() {
            this.animate({'bottom': -1 * this.outerHeight()}, 'fast', 'swing', function () {
                $(this).remove();
            });
        }
    };
})(jQuery);