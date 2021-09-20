$(document).ready(function() {
    "use strict";

    $('.header .mobile-menu img').on('click', function() {
        $('body').toggleClass('overlay');

        $('.header .list').toggleClass('active');
        $(this).attr('src', function() {
            if( $(this).attr('src') == 'assets/images/menu.png') {
                return 'assets/images/cancel.png';
            } else {
               return 'assets/images/menu.png'
            }
        });
    });



});