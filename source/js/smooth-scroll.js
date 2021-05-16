'use strict';

(function () {
  if (document.querySelector('.intro__text')) {
    var container = document.querySelector('.intro__text');

    container.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (evt.target.getAttribute('href')) {
        var href = evt.target.getAttribute('href');
        var offsetTop = document.querySelector(href).offsetTop;

        scroll({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
})();
