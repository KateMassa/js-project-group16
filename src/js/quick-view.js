// // Отримання списку книг
// const booksListContainer = document.querySelector('#book-list');

// // Функція для завантаження книги для модального вікна
// async function loadBookForModal(bookLink) {
//   try {
//     const response = await axios.get(bookLink);
//     const bookData = response.data;

//     openModal(bookData);
//   } catch (error) {
//     console.error('Error loading book for modal:', error);
//   }
// }

// // Додавання обробника події для кожної книги
// booksListContainer.addEventListener('click', function (event) {
//   // Перевірка, чи клікнули на посилання до книги
//   if (event.target.classList.contains('gallery-book-link')) {
//     event.preventDefault();
//     // Отримання посилання на книгу
//     const bookLink = event.target.href;
//     // Завантаження книги для модального вікна
//     loadBookForModal(bookLink);
//   }
// });
