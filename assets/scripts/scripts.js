var counter = 0;
var colors = [
    "#FFC923",
    "#F58A23",
    "#E65264",
    "#E66FC1",
    "#4FBC48",
    "#3FC0FF"
];

var $div = $('.button');
var $navLinks = $('.nav-links, a');


$(document).ready(function(){
  $('#slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  focusonchange: true,
  prevArrow:"<i class='fas fa-chevron-left fa-2x slick-prev'></i>",
  nextArrow:"<i class='fas fa-chevron-right fa-2x slick-next'></i>"
  });
});

$('.button').mouseenter(function() {
    var color = colors.shift();
    colors.push(color);
    $div.css({
        "background-color": color
    })
});


$(".close").click(function() {
    $('.outside').toggleClass('in');
    $('.bar').toggleClass('active');
    $(this).toggleClass('is-showing');
});


$("rect#yellow").click(function() {
    $("body, footer, #mobile-nav").css('background', "#FFC923")
});

$("rect#orange").click(function() {
    $("body, footer, #mobile-nav").css('background', "#F58A23")
});

$("rect#red").click(function() {
    $("body, footer, #mobile-nav").css('background', "#E65264")
});

$("rect#pink").click(function() {
    $("body, footer, #mobile-nav").css('background', "#E66FC1")
});

$("rect#green").click(function() {
    $("body, footer, #mobile-nav").css('background', "#4FBC48")
});

$("rect#blue").click(function() {
    $("body, footer, #mobile-nav").css('background', "#3FC0FF")
});

$("rect#white").click(function() {
    $("body, #mobile-nav").css('background', "#FFF")
    $("footer").css('background', "#00000010")
});

$("rect#black").click(function() {
    $("html").toggleClass('dark-mode')
    $("footer").css('background', "white")

});

$("#mobile-nav-trigger").click(function() {
    $('body').toggleClass('mobile-nav')
    $("#mobile-nav").toggleClass('closed')
    $("#mobile-nav").toggleClass('open')
    $("i").toggleClass('fa-times')
    $("i").toggleClass('fa-plus')
});

$("video").prop('muted', true);

$("video").hover(function() {
    if ($("video").prop('muted')) {
        $("video").prop('muted', false);
        $("video").prop('volume', 0.1);
    } else {
        $("video").prop('muted', true);
    }
});



/*

$('.nav-logo').hover(function () {
    var color = [
        "#FFC923", 
        "#E66FC1", 
        "#E65264", 
        "#4FBC48", 
        "#3FC0FF", 
        "#F58A23", 
        ];
    
    var square =[
        "rect#1", 
        "rect#2", 
        "rect#3", 
        "rect#4", 
        "rect#5", 
        "rect#6",
        "rect#7",
        "rect#8",
        "rect#9"]
    
    var randSquare = square[Math.floor(Math.random() * square.length)];
    var randColor = color[Math.floor(Math.random() * color.length)];

    $(randSquare).each(function () {
        $(randSquare).attr('fill', randColor);
    })
}); 

*/