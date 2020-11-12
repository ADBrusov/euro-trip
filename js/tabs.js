'use strict';

(function () {
  var cards = document.querySelectorAll('.place');
  var tabsButtons = document.querySelectorAll('.countries__list-item');
  var tabs = document.querySelectorAll('.country');

  tabsButtons.forEach(item => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      const id = evt.target.getAttribute('href').replace('#', '');

      tabsButtons.forEach(child => {
        child.classList.remove('countries__list-item--active');
      });

      tabs.forEach(child => {
        child.classList.remove('country--active');
      });

      tabs.forEach(child => {
        child.classList.add('visually-hidden');
      });

      item.classList.add('countries__list-item--active')
      document.getElementById(id).classList.add('country--active');
      document.getElementById(id).classList.remove('visually-hidden');
    })
  });

  cards.forEach(item => {
    item.addEventListener('click', function (evt) {
      const id = evt.target.getAttribute('id').replace('card-', '');

      tabsButtons.forEach(child => {
        child.classList.remove('countries__list-item--active');
      });

      tabs.forEach(child => {
        child.classList.remove('country--active');
      });

      tabs.forEach(child => {
        child.classList.add('visually-hidden');
      });

      document.getElementById(id).classList.add('country--active');
      document.getElementById(id).classList.remove('visually-hidden');
    })
  });
})();
