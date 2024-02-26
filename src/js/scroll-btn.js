document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scroll-to-top');
  // Показываем или скрываем кнопку в зависимости от положения скролла
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  // Прокручиваем страницу вверх при клике на кнопку
  scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  });
});
<button id="scroll-to-top"></button>;
