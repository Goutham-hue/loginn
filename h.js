// script.js
document.getElementById('signup-link').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.container').classList.add('slide-left');
});

document.getElementById('login-link').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.container').classList.remove('slide-left');
});