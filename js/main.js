var hashTagActive = "";
$(".menu--link").click(function(event) {
    if (hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
        event.preventDefault();
        //calculate destination place
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() + 50 - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({
            scrollTop: dest - 50
        }, 500, 'swing');
        hashTagActive = this.hash;
    }
});

$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
            $('.scrollToTop').removeClass('scrollToTop--is-gone');
			$('.scrollToTop').fadeIn();
			$('.scrollToTop').addClass('scrollToTop--is-active');
		} else if (!$('.scrollToTop').hasClass('scrollToTop--is-gone') && $('.scrollToTop').hasClass('scrollToTop--is-active')) {
			// $('.scrollToTop').fadeOut();
            $('.scrollToTop').addClass('scrollToTop--is-gone');
            $('.scrollToTop').removeClass('scrollToTop--is-active');
		}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
        $(this).addClass('scrollToTop--is-gone');
	});
});
