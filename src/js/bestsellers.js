import { BooksApi } from './fetchAPI';
import { createBookCard } from './bookCardTemplate';
import { elements } from './renderCategory';
import {
  isBookAlreadyExist,
  deleteFromLS,
  saveToLS,
  loadFromLS,
} from './localStorage';
import { BookAPI } from './fetchAPI';
// import sprite from './img/icons.svg'; // Assuming you still need this SVG sprite

const booksAPI = new BooksAPI();
const topBooksList = document.querySelector('.top-books-list');
const booksTitleContainer = document.querySelector('.books-title-container');

export function renderBestsellers() {
  //====== Записуємо кількість книг до відмальовки з результату функції
  let limit = calculateLimit(window.innerWidth);

  //===== Запитуємо книги з серверу, передаємо дані в функцію і відмальовуємо
  booksAPI
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
  elements.topBooksList.innerHTML = '';
  elements.booksTitleContainer.innerHTML = '';

  const dataBestsellers = data
    .map(elem => {
      let cardStarterMarkup = `<li><h2 class="gallery-title">${elem.list_name}</h2>
    <ul class="gallery-book-list" data-filter="${elem.list_name}">`;
      let booksArray = [];

      for (let i = 0; i < limit && i < elem.books.length; i++) {
        let book = createBookCard(elem, i);
        booksArray.push(book);
      }

      const seeMoreBtn = `<button class="see-more-btn" data-filter="${elem.list_name}" type="button">See More</button>`;
      const booksTemplate = booksArray.join(' ');
      const categoryMarkup =
        cardStarterMarkup + booksTemplate + '</ul>' + seeMoreBtn + '</li>';
      return categoryMarkup;
    })
    .join(' ');

  elements.topBooksList.innerHTML = dataBestsellers;

  const dataMarkupTitle = `<h2 class="top-books-title">Best Sellers <span class="colortext">Books</span></h2>`;
  elements.booksTitleContainer.innerHTML = dataMarkupTitle;

  onSeeMoreBtn();
}

// === Додаємо слухача подій на кожну кнопку наприкінці категорій книг
function onSeeMoreBtn() {
  const seeMoreBtns = document.querySelectorAll('.see-more-btn');
  seeMoreBtns.forEach(btn => {
    btn.addEventListener('click', onFiltred);
  });
}

// === Функція опрацювання кліку
async function onFiltred(event) {
  event.preventDefault();
  // === Ховаємо всі категорії
  const allCategories = document.querySelectorAll('.gallery-book-list');
  allCategories.forEach(category => {
    category.style.display = 'none';
  });
  let categoryName = event.target.dataset['filter'];
  // === Відображаємо тільки вибрану категорію
  const selectedCategory = document.querySelector(
    `ul[data-filter="${categoryName}"]`
  );
  selectedCategory.style.display = 'block';

  // === Видаляємо решту категорій
  const allCategoryItems = document.querySelectorAll('.top-books-list > li');
  allCategoryItems.forEach(item => {
    if (item.querySelector(`ul[data-filter="${categoryName}"]`) === null) {
      item.remove();
    }
  });

  // === Шукаємо і ховаємо кнопку в обраній категорії
  const selectedCategoryBtn =
    selectedCategory.parentElement.querySelector('.see-more-btn');
  selectedCategoryBtn.style.display = 'none';

  if (categoryName !== 'Best Sellers Books') {
    const booksByCategory = await booksApi.getBooksByCategory(categoryName);
    renderMoreBooks(booksByCategory, categoryName);
  }
}

// === Функція відмальовує книги обраної категорії
function renderMoreBooks(books, dataAttr) {
  const categoryContainer = document.querySelector(
    `ul[data-filter="${dataAttr}"]`
  );

  const booksMarkup = books
    .map(
      book => `
    <li class='gallery-book-item' data-bookid="${book._id}">
      <a class="gallery-book-link">
        <div class="preview">
          <img class="gallery-book-img" data-id="${book._id}" src="${book.book_image}" alt="${book.title}">
          <div class="actions-card">
            <p class="action-text">quick view</p>
          </div>
        </div>
        <div class="content">
          <h3 class="gallery-book-name">${book.title}</h3>
          <h4 class="gallery-book-text">${book.author}</h4>
        </div>
      </a>
    </li>`
    )
    .join('');

  categoryContainer.innerHTML = booksMarkup;
}

//===== Зміна кількості книг до відмальовки при зміні ширини екрану
window.addEventListener('resize', () => {
  let limit = calculateLimit(window.innerWidth);
  renderBestsellers(limit);
});
