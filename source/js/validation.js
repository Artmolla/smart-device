'use strict';

(function () {
  if (document.querySelector('.callback-form')) {
    var formsList = document.querySelectorAll('.callback-form');

    formsList.forEach(function (form) {
      var inputsList = form.querySelectorAll('input');
      var submitButton = form.querySelector('.callback-form__button');

      var validity = function (evt) {
        inputsList.forEach(function (input) {
          if (!input.validity.valid) {
            evt.preventDefault();

            input.classList.add('callback-form__input-error');
            findRelatedLable(form, input);
          } else {
            input.classList.remove('callback-form__input-error');
            findRelatedLable(form, input);
          }
        });
      };

      submitButton.addEventListener('click', validity);
    });

    var findRelatedLable = function (form, input) {
      var labelsList = form.querySelectorAll('label');

      labelsList.forEach(function (label) {
        if (label.htmlFor === input.id && !input.validity.valid) {
          label.classList.add('callback-form__input-error--label');
        } else {
          label.classList.remove('callback-form__input-error--label');
        }
      });
    };
  }
})();
