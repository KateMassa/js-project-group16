import { BooksApi } from './fetchAPI';

const booksApi = new BooksApi();
const topBooksList = document.querySelector('.top-books-list');
const booksTitleContainer = document.querySelector('.books-title-container');

export function renderBestsellers() {
  //====== Записуємо кількість книг до відмальовки з результату функції
  let limit = calculateLimit(window.innerWidth);

  //===== Запитуємо книги з серверу, передаємо дані в функцію і відмальовуємо
  booksApi
    .getTopBooks()
    .then(data => dataBestsellers(data, limit))
    .catch(error => console.error('Error fetching top books:', error));
}

//==== Вираховуємо кількіть книг до відмальовки, в залежності від ширини екрану
function calculateLimit(screenWidth) {
  if (screenWidth >= 1440) {
    return 5;
  } else if (screenWidth >= 768) {
    return 3;
  } else {
    return 1;
  }
}

// ==== Функція на відмальовку бестселлерів
function dataBestsellers(data, limit) {
  topBooksList.innerHTML = '';
  const dataBestsellers = data
    .map(elem => {
      let cardStarterMarkup = `<li><h2 class="gallery-title">${elem.list_name}</h2>
    <ul class="gallery-book-list" data-filter="${elem.list_name}">`;
      let booksArray = [];
      for (let i = 0; i < limit && i < elem.books.length; i++) {
        let book = `<li class='gallery-book-item' data-bookid="${elem.books[i]._id}">
        <a class="gallery-book-link">
        <div class="preview">
          <img class="gallery-book-img" data-id="${elem.books[i]._id}" src="${elem.books[i].book_image}" alt="${elem.books[i].title}">
          <div class="actions-card">
        <p class="action-text">quick view</p>
          </div>
        </div>
          <div class="content">
            <h3 class="gallery-book-name">${elem.books[i].title}</h3>
            <h4 class="gallery-book-text">${elem.books[i].author}</h4>
          </div>
        </a>
      </li>`;
        booksArray.push(book);
      }

      const booksTemplate = booksArray.join(' ');
      return cardStarterMarkup + booksTemplate + '</ul>' + '' + '</li>';
    })
    .join(' ');

  topBooksList.innerHTML = dataBestsellers;
  const dataMarkupTitle = `<h2 class="top-books-title">Best Sellers <span class="colortext">Books</span></h2>`;
  booksTitleContainer.innerHTML = dataMarkupTitle;
}

//===== Зміна кількості книг до відмальовки при зміні ширини екрану
window.addEventListener('resize', () => {
  let limit = calculateLimit(window.innerWidth);
  renderBestsellers(limit);
});
