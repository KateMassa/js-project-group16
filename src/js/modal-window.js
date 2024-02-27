import {
  isBookAlreadyExist,
  deleteFromLS,
  saveToLS,
  loadFromLS,
} from './localStorage';

import BookAPI from './fetchAPI';

import amazonIcon from '../img/amazon-default.png';
import appleIcon from '../img/book-default.png';
import sprite from '../img/icons.svg';

const bookAPI = new BookAPI();

document.querySelector('.gallery-list').addEventListener('click', async e => {
  const bookId = e.target.parentNode.getAttribute('id');
  const book = await bookAPI.fetchBookById(bookId);
  renderModalwindow(book);

  const modal = document.querySelector('.backdrop');
  const closeModalWindow = document.querySelector('.close-modal');

  closeModalWindow.addEventListener('click', closeModal);
  modal.addEventListener('click', modalClickHandler);
  document.addEventListener('keydown', keydownHandler);
});

// export const showBoockDetails = book => {
//   renderModalwindow(book);

//   const modal = document.querySelector('.backdrop');
//   const closeModalWindow = document.querySelector('.close-modal');

//   closeModalWindow.addEventListener('click', closeModal);
//   modal.addEventListener('click', modalClickHandler);
//   document.addEventListener('keydown', keydownHandler);
// };

async function renderModalwindow(book) {
  const markup = `<div class="backdrop">
  <div class="modal">
    <button class="close-modal">
      <svg class="modal-svg-close" width="24" height="24">
        <use href="${sprite}#icon-x-close"></use>
      </svg>
    </button>

    <div class="desctop">
      <img src="${book.book_image}" alt="${book.title}" class="img-modal" />
      <div class="lauch">
        <div class="tittle-books">
          <h2 class="boock-name">${book.title}</h2>
          <p class="author">${book.author}</p>
        </div>

        <p class="about-book">
         ${book.description}
        </p>

        <ul class="sale-place">
          <li>
            <a href="${book.amazon_product_url}" target="_blank"
              ><img

                class="amazon-link"
                              
                src="${amazonIcon}"

                alt="amazon"
                width="62"
                height="19"
            /></a>
          </li>
          <li>
            <a href="${book.book_uri}" target="_blank"
              ><img

                class="apple-link"
                               
                src="${appleIcon}"

                alt="amazon"
                width="33"
                height="32"
            /></a>
          </li>
        </ul>
      </div>
    </div>

    <button class="add-localStorage" type="button"></button>
    <p class="congrat"></p>
  </div>
</div>
`;
  const main = document.querySelector('main');
  main.insertAdjacentHTML('beforeend', markup);

  const addDelBtn = document.querySelector('.add-localStorage');
  const paragraphCongrat = document.querySelector('.congrat');

  function updateButtonAndText() {
    const isBookAlreadyAdded = isBookAlreadyExist(book._id);

    const buttonText = isBookAlreadyAdded
      ? 'REMOVE FROM THE SHOPPING LIST'
      : 'ADD TO SHOPPING LIST';
    const paragraphCongratText = isBookAlreadyAdded
      ? `Congratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".`
      : '';

    addDelBtn.textContent = buttonText;
    paragraphCongrat.textContent = paragraphCongratText;

    const resize = document.querySelector('.modal');
    const distance = document.querySelector('.desctop');

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      if (buttonText === 'ADD TO SHOPPING LIST') {
        addDelBtn.style.width = '211px';
        addDelBtn.style.left = '62px';
        addDelBtn.style.top = '695px';
        resize.style.height = '762px';
      } else if (buttonText === 'REMOVE FROM THE SHOPPING LIST') {
        addDelBtn.style.width = '279px';
        addDelBtn.style.position = 'absolute';
        addDelBtn.style.left = '28px';
        addDelBtn.style.top = '700px';
        resize.style.height = '806px';
      }
    }

    const tablet = window.innerWidth >= 769;

    if (tablet) {
      if (buttonText === 'ADD TO SHOPPING LIST') {
        resize.style.height = '465px';
      } else if (buttonText === 'REMOVE FROM THE SHOPPING LIST') {
        resize.style.height = '501px';
      }
    }
  }
  updateButtonAndText();

  addDelBtn.addEventListener('click', e => {
    e.preventDefault();
    const isBookAlreadyAdded = isBookAlreadyExist(book._id);

    console.log(isBookAlreadyAdded);

    if (isBookAlreadyAdded) {
      deleteFromLS(book._id);
    } else {
      saveToLS(book);
    }
    updateButtonAndText();
  });
}

function closeModal() {
  removeEventListeners();
  const modal = document.querySelector('.backdrop');
  modal.remove();
}

function removeEventListeners() {
  const modal = document.querySelector('.backdrop');
  const closeModalWindow = document.querySelector('.close-modal');
  closeModalWindow.removeEventListener('click', closeModal);
  modal.removeEventListener('click', modalClickHandler);
  document.removeEventListener('keydown', keydownHandler);
}

function modalClickHandler(event) {
  const modal = document.querySelector('.backdrop');
  if (event.target === modal) {
    closeModal();
  }
}

function keydownHandler(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
