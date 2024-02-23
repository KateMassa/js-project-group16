import { BooksApi } from "./fetchAPI";

const booksApi = new BooksApi;

export function renderBestsellers() {

  booksApi.getTopBooks()
    .then(data => dataBestsellers(data))
    .catch();
}

let limit = 1;

function dataBestsellers(data) {

//   __ul-class__.innerHTML = '';
  const dataBestsellers = data
    .map(elem => {
      let cardStarterMarkup = `<li><h2 class="gallery-title">${elem.list_name}</h2>
    <ul class="gallery-book-list" data-filter="${elem.list_name}">`;
      let booksArray = [];
      for (let i = 0; i < limit; i += 1) {
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

//   __ul-class___.innerHTML = dataBestsellers;
//   const dataMarkupTitle = `<h2>Best Sellers <span class="colortext">Books</span></h2>`;
//   __title-class___.innerHTML = dataMarkupTitle;
}

