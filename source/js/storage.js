'use strict';

(function () {
  var callbackForms = document.querySelectorAll('.callback-form form');

  callbackForms.forEach(function (form) {
    var userName = form.querySelector('input[name="name"]');
    var userPhone = form.querySelector('input[type="tel"]');
    var userQuestion = form.querySelector('textarea');

    form.addEventListener('submit', function () {
      localStorage.clear();

      localStorage.setItem('name', userName.value);
      localStorage.setItem('phone', userPhone.value);
      localStorage.setItem('questions', userQuestion.value);
    });
  });
})();
