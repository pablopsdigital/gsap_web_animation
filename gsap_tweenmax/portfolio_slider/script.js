//Definition Swiper objet

var modernSlider = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 100,
  centeredSlides: true,
  mousewhell: true,
});

//
modernSlider.on("slideChange", function () {
  TweenMax.to(".reveal", 0.2, {
    y: "50px",
  });

  TweenMax.to(".reveal", 0, {
    y: "0",
    delay: 0.5,
  });

  TweenMax.to(".reveal", 0.2, {
    y: "0",
    delay: 0.5,
  });

  TweenMax.to("swiper-slide-active .port-text", 0.2, {
    autoAlpha: 1,
  });

  TweenMax.to("swiper-slide-active .port-text", 0.2, {
    autoAlpha: 0,
  });

  TweenMax.to("swiper-slide-active .port-text", 0.2, {
    autoAlpha: 0,
  });

  TweenMax.to("swiper-slide-active", 0.2, {
    scale: 1,
    autoAlpha: Power4.easeOut,
  });

  TweenMax.to("swiper-slide", 0, {
    scale: 0.95,
  });
});
