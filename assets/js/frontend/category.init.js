/*
Template Name: Recruitment world Recruitment world
Author: Nami
Version: 1.0.0
Website: https://Nami.com/
Contact: Nami@gmail.com
File: category Js File
*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
