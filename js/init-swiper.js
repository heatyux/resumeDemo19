! function () {
  var view = document.querySelector('#mySlides');
  var controller = {
    view: null,
    swiper: null,
    swiperOrtions: {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    },
    init: function (view) {
      this.view = view,
      this.initSwiper()
    },
    initSwiper: function () {
      this.swiper = new Swiper(view.querySelector('.swiper-container'), this.swiperOrtions)
    }
  };
  controller.init(view);
}.call()