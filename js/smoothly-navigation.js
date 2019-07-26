! function () {
  var view = document.querySelector('nav.menu');
  var controller = {
    view: null,
    aTags: null,
    initAnimation: function () {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    init: function (view) {
      this.view = view;
      this.initAnimation();
      this.bindEvents();
    },
    scrollToElement: function(element) {
      let top = element.offsetTop;
      let currentTop = window.scrollY;
      let targetTop = top - 80;
      let s = targetTop - currentTop;
      let t = Math.abs((s / 100) * 300);
      if (t > 500) {t = 500}

      const coords = {y: currentTop};
      const tween = new TWEEN.Tween(coords)
        .to({y: targetTop}, t)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(() => {
          window.scrollTo(0, coords.y);
        })
        .start();
    },
    bindEvents: function () {
      //设置滚动时长与速度
      let aTags = this.view.querySelectorAll('nav.menu > ul > li > a');
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (x) => {
          x.preventDefault();
          let a = x.currentTarget;
          let href = a.getAttribute("href");
          let element = document.querySelector(href);
          this.scrollToElement(element);
        }
      }
    },
  }
  controller.init(view);
}.call()