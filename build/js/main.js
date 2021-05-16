'use strict';

(function () {
  var accordionContent = document.querySelector('.accordion');
  var accordionItems = Array.from(accordionContent.querySelectorAll('.accordion__item'));
  var accordionButtons = Array.from(accordionContent.querySelectorAll('.accordion__button'));

  var closeAllAccordion = function (element) {
    var currentElement = element || null;

    accordionItems.forEach(function (it) {
      if (!it.classList.contains('accordion__item') && currentElement !== it) {
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

})();

'use strict';

(function () {
  var openModalButton = document.querySelector('.header__button');

  var closeModal = function (modal, buttonClose) {
    modal.classList.remove('modal--open');
    buttonClose.removeEventListener('click', closeModalClickHandler);
    document.removeEventListener('keydown', closeModalKeyPressHandler);
    document.removeEventListener('click', closeModalOutsideClickHandler);
  };

  var closeModalKeyPressHandler = function (evt) {
    var isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

    if (isEscKey) {
      document.querySelector('.modal--open').classList.remove('modal--open');
    }
  };

  var closeModalOutsideClickHandler = function (evt) {
    if (evt.target.classList.contains('modal')) {
      document.querySelector('.modal--open').classList.remove('modal--open');
    }
  };

  var closeModalClickHandler = function (evt) {
    evt.preventDefault();
    var modal = evt.target.closest('.modal--open');
    var buttonClose = evt.target;
    closeModal(modal, buttonClose);
  };

  var openModalClickHandler = function (evt) {
    evt.preventDefault();
    // var modalName = evt.target.dataset.modal;
    var modal = document.querySelector('.modal');
    modal.classList.add('modal--open');
    var modalCloseButton = modal.querySelector('.modal__close-modal-button');
    modalCloseButton.focus();
    modalCloseButton.addEventListener('click', closeModalClickHandler);
    document.addEventListener('keydown', closeModalKeyPressHandler);
    document.addEventListener('click', closeModalOutsideClickHandler);
  };

  openModalButton.addEventListener('click', openModalClickHandler);
})();

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
