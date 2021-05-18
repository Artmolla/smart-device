'use strict';

(function () {
  if (document.querySelector('.header__button')) {
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

      var modal = document.querySelector('.modal');
      modal.classList.add('modal--open');
      var userNameField = modal.querySelector('input[name="name"]');
      var modalCloseButton = modal.querySelector('.modal__close-modal-button');

      userNameField.focus();
      modalCloseButton.addEventListener('click', closeModalClickHandler);
      document.addEventListener('keydown', closeModalKeyPressHandler);
      document.addEventListener('click', closeModalOutsideClickHandler);
    };

    openModalButton.addEventListener('click', openModalClickHandler);
  }
})();
