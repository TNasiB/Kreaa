$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
        $('.filter').toggleClass('backdrop')
    });
    $('.header__menu-list').on('click','a',function(event){
        event.preventDefault();
        let id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body, html').animate({scrollTop:top}, 400);
    });
    $('.filter').on('click', function() {
        $('.header__burger').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
        $('.filter').toggleClass('backdrop');
	});	
});
