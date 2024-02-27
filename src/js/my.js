// const booksListContainer = document.querySelector('#book-list');

// booksListContainer.addEventListener('click', function (e) {
//   if (e.target.classList.contains('gallery-book-img')) {
//     e.preventDefault();
//     const bookId = e.target.dataset.id;
//     loadBookForModal(bookId);
//   }
// });

// async function loadBookForModal(bookId) {
//   try {
//     // Отримуємо дані про книгу з сервера за допомогою ідентифікатора
//     const { data } = await axios.get(
//       `https://books-backend.p.goit.global/books/${bookId}`
//     );
//     // Викликаємо функцію для відображення модального вікна з отриманими даними про книгу
//     openModal(data);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// function onClickBook(e) {
//   e.preventDefault();
//   if (!e.target.closest('.js-click-book')) {
//     return;
//   }
//   openModal(e);
// }

document
  .querySelector('.caterories-content')
  .addEventListener('click', onClickBook);
function onClickBook(e) {
  e.preventDefault();
  console.log('onClickBook');
  if (!e.target.closest('.js-click-book')) {
    return;
  }
  openModal(e);
}

function addBooksListeners() {
  document
    .querySelector('.caterories-content')
    .addEventListener('click', onClickBook);

  function onClickBook(e) {
    e.preventDefault();
    if (!e.target.closest('.js-click-book')) {
      return;
    }
    openModal(e);
  }
}
