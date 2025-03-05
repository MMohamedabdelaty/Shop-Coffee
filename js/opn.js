'use strict';
console.log("Hi");


$(window).scroll(function (){
    let scrolled = $(window).scrollTop();
    if (scrolled > 500) $(".backtotop").show(500);
    if (scrolled < 500) $(".backtotop").hide(500);

})
$(".backtotop").click(function (){
    $("html , body").animate({
        scrollTop: "0"} , 0)
})

//Let's open and close the mobile menu
$(".openmenu").click(function (){
    $(".sidebar").animate({
        right: "0px"
    })
})
$(".closemenu").click(function (){
    $(".sidebar").animate({
        right: "-250px"
    })
})



//let's do the carousel
$(document).ready(function(){
    let menu = $("#cards");
    menu.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1120: {
                items: 4
            }
        }
    })
  });
  let header = document.querySelector('header');

  window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
  });

  function setInterValue() {
    var input = document.getElementById=('input');
    input.setAttribute("1000000000", "10000000")
}