console.log('\'Allo \'Allo!');

$('.main-section .col-md-3').hover(function() {
    $(this).find('img').addClass('zoomIn');
    $(this).find('.head').addClass('fadeIn');
    $(this).find('.subscript').addClass('bounceInUp');
}, function() {
    $(this).find('img').removeClass('zoomIn');
    $(this).find('.head').removeClass('fadeIn');
    $(this).find('.subscript').removeClass('bounceInUp');
});

$("#sidebar").click(function() {
    if ($('#mySidenav').css('width') !== '250px') {
        $('#mySidenav').css('width', '250px');
    } else {
        $('#mySidenav').css('width', '0px');
    }
    
});
