const btns=document.querySelector("#btnscrolltop");function openCity(o,e){var n,l,t;for(l=document.getElementsByClassName("tabcontent"),n=0;n<l.length;n++)l[n].style.display="none";for(t=document.getElementsByClassName("tablinks"),n=0;n<t.length;n++)t[n].className=t[n].className.replace(" active","");document.getElementById(e).style.display="block",o.currentTarget.className+=" active"}btns.addEventListener("click",function(){window.scrollTo(0,0)}),$("#mobileSearch").on("click",function(){"0"==$(this).val()?($("#for-search").css("display"," block"),$(this).val("1")):($("#for-search").css("display"," none"),$(this).val("0"))}),$("#mobileMenu").on("click",function(){"0"==$(this).val()?($("#mySidepanel").css("display"," none"),$(this).val("1")):($("#mySidepanel").css("display"," block"),$(this).val("0"))}),$(".dropbtn").on("click",function(){$(this).siblings().toggle()}),$("#owl-demo1").owlCarousel({nav:!0,dots:!1,loop:!0,autoPlay:3e3,items:1}),$("#owl-demo2").owlCarousel({loop:!0,margin:10,autoplay:!0,nav:!1,items:1,responsive:{767:{items:1}}}),$("#owl-demo3").owlCarousel({loop:!0,margin:10,autoplay:!0,nav:!1,items:1}),$("#owl-demo4").owlCarousel({loop:!0,margin:10,autoplay:!0,nav:!1,items:1}),$("#for-slider").owlCarousel({loop:!0,margin:10,autoPlay:!0,autoplayTimeout:2e3,nav:!0,dots:!1,responsiveClass:!0,responsive:{0:{items:2},767:{items:3},1200:{items:4}}}),$(document).ready(function(){$(".for-menu2").click(function(){$(".menus-p").toggle()})}),$(".for-menu2").on("click",o=>{$(".menus").toggleClass("d-block")}),$(document).ready(function(){$("#dropdown").click(function(){$("#dropdown-content").toggle()})}),$(document).ready(function(){$(".angle-down-1").click(function(){$(".custom-menu-block4-p").toggle()})}),$(document).ready(function(){$(".down-angle").click(function(){$(".custom-menu-block4-p-1").toggle()})}),$(document).ready(function(){$(".down-angle1").click(function(){$(".custom-menu-block4-p-2").toggle()})});