const swiper = new Swiper('.blog-slider', {
  passiveListeners: true,
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  autoplay: {
    disableOnInteraction: false,
    delay: 3000
  },
  mousewheel: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

// 使用箭头函数和事件监听器替代 onmouseenter/onmouseleave
swiper.el.addEventListener('mouseenter', () => swiper.autoplay.stop());
swiper.el.addEventListener('mouseleave', () => swiper.autoplay.start());