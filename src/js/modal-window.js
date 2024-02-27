import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import {
  isBookAlreadyExist,
  deleteFromLS,
  saveToLS
} from './localStorage';

import BookAPI from './fetchAPI';

const bookAPI = new BookAPI();

document.querySelector('.gallery-list').addEventListener('click', async e => {
  const bookId = e.target.parentNode.getAttribute('id');
  const book = await bookAPI.fetchBookById(bookId);
  showBookDetails(book);
});

export const showBookDetails = bookData => {
  let escHandlerFn;
  let closeHandlerFn;

  const template = document.querySelector('#modal-template');
  const lightbox = new basicLightbox.create(template, {
    onShow: instance => {
      document.body.classList.add('modal-opened');
      escHandlerFn = event => {
        if (event.key === 'Escape') {
          instance.close();
        }
      };
      document.addEventListener('keydown', escHandlerFn);
      closeHandlerFn = e => {
        document.body.classList.remove('modal-opened');
        instance.close();
      };
      instance
        .element()
        .querySelector('.modal-close')
        .addEventListener('click', closeHandlerFn);
    },
    onClose: instance => {
      document.removeEventListener('keydown', escHandlerFn);
      instance
        .element()
        .querySelector('.modal-close')
        .removeEventListener('click', closeHandlerFn);
    },
  });
  const modalBody = lightbox.element();

  modalBody.querySelector('.book-img').src = bookData.book_image;
  modalBody.querySelector('.book-name').innerText = bookData.title;
  modalBody.querySelector('.book-author').innerText = bookData.author;
  modalBody.querySelector('.book-description').innerText = bookData.description;
  modalBody.querySelector('.book-description').innerText = bookData.description;

  bookData.buy_links.forEach(link => {
    if (link.name === 'Amazon') {
      modalBody.querySelector('.book-links-amazon').href = link.url;
    } else if (link.name === 'Apple Books') {
      modalBody.querySelector('.book-links-applebook').href = link.url;
    }
  });

  const addToShoppingListElement = modalBody.querySelector('.addToList');
  const removeFromShoppingListElement =
    modalBody.querySelector('.removeFromList');

  if (isBookAlreadyExist(bookData._id)) {
    // If book already in shopping list

    addToShoppingListElement.classList.add('hidden');
    removeFromShoppingListElement.classList.remove('hidden');
  }

  addToShoppingListElement.addEventListener('click', e => {
    e.preventDefault();
    saveToLS(bookData);

    modalBody.querySelector('.removeFromList-info').classList.remove('hidden');
    addToShoppingListElement.classList.add('hidden');
    removeFromShoppingListElement.classList.remove('hidden');
  });

  removeFromShoppingListElement.addEventListener('click', e => {
    e.preventDefault();
    deleteFromLS(bookData._id);

    modalBody.querySelector('.removeFromList-info').classList.add('hidden');
    addToShoppingListElement.classList.remove('hidden');
    removeFromShoppingListElement.classList.add('hidden');
  });

  lightbox.show();
};

