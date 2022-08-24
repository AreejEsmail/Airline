$(function () {
    'use strict';

    var myHeader =  $('.header')
    myHeader.height($(window).height());

    $(window).resize(function () 
    {
        myHeader.height($(window).height());
    });  

    $('links li').click(function (){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.links li a').click(function (){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top 
        }, 1000);
    });

}); 

