import Pagination from 'tui-pagination';
import { deleteFromLS, loadFromLS } from './localStorage';

import 'tui-pagination/dist/tui-pagination.css'

import amazonIcon from '../img/amazon-default.png';
import appleIcon from '../img/book-default.png';
import booksIcon from '../img/book-pile.png';

const PAGE_SIZE = 3;
let pagination;

function getBooksForPage(books, page) {
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  return books.slice(startIndex, endIndex);
}

function renderShopList(data) {
  const shoppingList = document.querySelector('.shopping-list');

  if (!shoppingList) {
    console.error("Element with class 'shopping-list' not found.");
    return;
  }

  shoppingList.innerHTML = '';
  const defaultMarkup = `<p>This page is empty, add some books and proceed to order.</p>
          <img
          class="no-book"
          src="${booksIcon}"
          alt="Book"
          />`;
  const markup = data
    .map(
      ({
        book_image,
        title,
        author,
        _id,
        description,
        list_name,
        buy_links
      }) => {
        let amazonLink;
        let appleBookLink;

        buy_links.forEach(link => {
          if (link.name === 'Amazon') {
            amazonLink = link.url;
          } else if (link.name === 'Apple Books') {
            appleBookLink = link.url;
          }
        });
        return `<li class="one-book">
                  <img
                      class="img-book"
                      src="${book_image}"
                      alt="Book"
                  />
                  <div class="description">
                      <div class="up-part">
                      <h2 class="book-name">${title}</h2>

                      <button data-id="${_id}" class="basket" type="button">
                          <svg class="trash" width="16" height="16">
                          <use href="#icon-trash"></use>
                          </svg>
                      </button>
                      </div>
                      <h3 class="type-name">${list_name}</h3>
                      <p class="text-description">
                      ${description}
                      </p>

                      <div class="book-app">
                      <h3 class="name-author">${author}</h3>
                      <a href="${amazonLink}" target="_blank"><img class="amazon" src="${amazonIcon}" alt="amazon" /></a>
                      <a href="${appleBookLink}" target="_blank"><img class="apple" src="${appleIcon}" alt="apple" /></a>
                      </div>
                  </div>
                  </li>`;
      }
    )
    .join('');

  shoppingList.innerHTML = data.length > 0 ? markup : defaultMarkup;

  const booksItems = document.querySelectorAll('.shopping-list .basket');

  booksItems.forEach(item => {
    const bookId = item.getAttribute('data-id');
    item.addEventListener('click', () => {
      deleteFromLS(bookId);
      const updatedBooks = loadFromLS();
      let currentPage = pagination.getCurrentPage();

      updatePages(updatedBooks.length);

      if ((currentPage - 1) * PAGE_SIZE >= updatedBooks.length) {
        currentPage -= 1;
        pagination.movePageTo(currentPage);
      } else {
        renderShopList(getBooksForPage(updatedBooks, currentPage));
      }
    });
  });
}

function initPagination(booksCount) {
  pagination = new Pagination('tui-pagination-container', {
        totalItems: booksCount,
        itemsPerPage: PAGE_SIZE,
        visiblePages: 3,
        usageStatistics: false
  });

  updatePages(booksCount);
  
  pagination.on('afterMove', function(eventData) {
    const books = loadFromLS();

    updatePages(books.length);
    renderShopList(getBooksForPage(books, eventData.page));
  });
}

function updatePages(booksCount) {
  const paginationContainer = document.getElementById('tui-pagination-container');

  if (booksCount <= PAGE_SIZE) {
    paginationContainer.classList.add('hidden');
  } else {
    paginationContainer.classList.remove('hidden');
  }

  pagination.setTotalItems(booksCount);
}

document.addEventListener('DOMContentLoaded', function () {
  const books = loadFromLS();

  initPagination(books.length);

  renderShopList(getBooksForPage(books, 1));
});
