import { BooksApi } from "./fetchAPI";
import { createBookCard } from "./bookCardTemplate";

const booksApi = new BooksApi;

export const elements = {
  bookList: document.querySelector('.book-list'),
  topBooksList: document.querySelector('.top-books-list'),
  booksTitleContainer: document.querySelector('.books-title-container')
};


//=== Функція попередньо очищує контент каталогу книг та дістає книги за обраною категорією
export function renderCategory(categoryName) {
    elements.topBooksList.innerHTML = '';
    elements.booksTitleContainer.innerHTML = '';

    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = categoryName;
    elements.booksTitleContainer.appendChild(categoryTitle);

    booksApi.getBooksByCategory(categoryName)
        .then(data => dataCategory(data))
        .catch(error => console.error('Error fetching top books:', error));
}

// ==== Функція на відмальовку книг за категорією
function dataCategory(data) {

    const booksMarkup = data.map(book =>
        `<li class='gallery-book-item' data-bookid="${book._id}">
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
        ).join('');
    
    elements.bookList.innerHTML = booksMarkup;
}