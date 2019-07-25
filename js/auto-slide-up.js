! function () {
  //添加offset
  let specialTags = document.querySelectorAll('[data-x]');
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset');
  }
  findClosest();

  //滚动sticky事件
  window.addEventListener('scroll', function () {
    findClosest();
  })

  //添加高亮
  function findClosest() {
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;
    for (let i = 1; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop -
          window.scrollY)) {
        minIndex = i;
      }
    }
    specialTags[minIndex].classList.remove('offset');
    let id = specialTags[minIndex].id;
    let aTag = document.querySelector('a[href="#' + id + '"]');
    let liTag = aTag.parentNode;
    let brotherTag = liTag.parentNode.children;
    for (let i = 0; i < brotherTag.length; i++) {
      brotherTag[i].classList.remove("highlight");
    }
    liTag.classList.add("highlight");
  }

}.call()