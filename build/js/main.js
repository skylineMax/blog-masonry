$(function() {
    $menu = $('.menu');
    $topSocial = $('.social-top');
    $fixed = $('.fixed');
    $common = $('.common');
    $header = $('header');
    $('.burger, .close').click(function (e) {
        e.preventDefault();
        $('.burger').toggleClass('open');
        $topSocial.toggle('slide');
        $menu.toggle('slide');
        $('.close-btn').toggle('slide');
    });
    $fixed.click(function () {
        $header.addClass('fixed-header');
        $('main').css('marginTop', '100px');
    });
    $common.click(function () {
        $header.removeClass('fixed-header');
        $('main').css('marginTop', '0');
    });
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.col'
    });
});