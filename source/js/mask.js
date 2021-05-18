'use strict';

(function () {
  if (document.querySelector('input[type="tel"]')) {
    var phoneFields = document.querySelectorAll('input[type="tel"]');
    var phoneFieldMask = {
      mask: '+7(000)000-00-00'
    };

    phoneFields.forEach(function (field) {
      var mask = new window.IMask(field, phoneFieldMask);
      mask.value = field.value;

      field.addEventListener('focus', function () {
        field.value = '+7(';
      });
    });
  }
})();
