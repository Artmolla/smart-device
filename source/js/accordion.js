'use strict';

(function () {
  if (document.querySelector('.accordion')) {
    var mediaQuery = window.matchMedia('(max-width: 767px)');

    if (mediaQuery.matches) {
      var accordionContent = document.querySelector('.accordion');
      var accordionItems = Array.from(accordionContent.querySelectorAll('.accordion__item'));
      var accordionButtons = Array.from(accordionContent.querySelectorAll('.accordion__button'));

      var closeAllAccordion = function (element) {
        var currentElement = element || null;

        accordionItems.forEach(function (it) {
          if (it.classList.contains('accordion__item--open') && currentElement !== it) {
            it.classList.remove('accordion__item--open');
          }
        });
      };

      var closeAccordionKeyPressHandler = function (evt) {
        var isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

        if (isEscKey) {
          evt.target.closest('.accordion__item').classList.remove('accordion__item--open');
          evt.target.removeEventListener('keydown', closeAccordionKeyPressHandler);
        }
      };

      var toggleAccordionClickHandler = function (evt) {
        evt.preventDefault();

        closeAllAccordion(evt.target.closest('.accordion__item'));
        evt.target.closest('.accordion__item').classList.toggle('accordion__item--open');
        evt.target.addEventListener('keydown', closeAccordionKeyPressHandler);
      };

      accordionButtons.forEach(function (it) {
        it.addEventListener('click', toggleAccordionClickHandler);
      });

      closeAllAccordion();

    }
  }
})();
