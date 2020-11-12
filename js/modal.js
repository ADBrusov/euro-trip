'use strict';

(function () {
  var modalBuy = document.querySelector('.modal-buy');
  var buttonsBuy = document.querySelectorAll('.button-buy');
  var modalButtonClose = document.querySelector('.modal-buy__button-close');

  buttonsBuy.forEach(item => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalBuy.classList.remove('visually-hidden');

      modalButtonClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalBuy.classList.add('visually-hidden');
      });

      document.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
          modalBuy.classList.add('visually-hidden');
        }
      });
    })
  });

})();
