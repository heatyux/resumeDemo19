//二级菜单
! function () {

  // let liTags = document.getElementsByClassName("menuTigger");
  let liTags = document.querySelectorAll("nav.menu > ul > li")
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add("active");
      // let li = x.currentTarget;
      // let child = li.getElementsByTagName('ul')[0];
      // let brother = a.nextSibling;
      // while(brother.tagName !== "UL") {
      //     brother = brother.nextSibling;
      // }
      // child.classList.add("active");
    }
    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove("active");
      // let li = x.currentTarget;
      // let child = li.getElementsByTagName('ul')[0];
      // let brother = a.nextSibling;
      // while(brother.tagName !== "UL") {
      //     brother = brother.nextSibling;
      // }
      // child.classList.remove("active");
    }
  }

  //滚动到指定元素
  // let aTags = document.querySelectorAll("nav.menu > ul > li > a");
  // for (let i = 0; i < aTags.length; i++) {
  //     aTags[i].onclick = function (x) {
  //         x.preventDefault();
  //         let a = x.currentTarget;
  //         let href = a.getAttribute("href");
  //         let element = document.querySelector(href);
  //         let top = element.offsetTop;
  //         window.scrollTo(0, top - 80);
  //     }
  // }

  //设置滚动时长与速度
  let aTags = document.querySelectorAll('nav.menu > ul > li > a');

  function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);

  for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
      x.preventDefault();
      let a = x.currentTarget;
      let href = a.getAttribute("href");
      let element = document.querySelector(href);
      let top = element.offsetTop;
      // window.scrollTo(0, top - 80);

      let currentTop = window.scrollY;
      let targetTop = top - 80;
      let s = targetTop - currentTop;
      let t = Math.abs((s / 100) * 300);
      if (t > 500) {
        t = 500
      }

      const coords = {
        y: currentTop
      };
      const tween = new TWEEN.Tween(coords)
        .to({
          y: targetTop
        }, t)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(() => {
          window.scrollTo(0, coords.y);
        })
        .start();
    }
  }
}.call()