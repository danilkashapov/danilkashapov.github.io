$(document).ready(function () {
   $('.menu').on('click', function () {
       $('.main').addClass('menu_active');
       console.log(123);
   });
    $('.close').on('click', function () {
        $('.main').removeClass('menu_active');
    });
});