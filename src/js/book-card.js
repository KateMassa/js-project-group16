function createBookCard(book, delay) {
  const { _id, book_image, title, author } = book;
  return `<li class="book-card" data-aos="flip-left" data-aos-delay="${delay}" data-aos-anchor-placement="top-bottom">
    <a href="#" class="book-card__link">
    <div class="book-card__thumb">
    <img class="book-card__image" src="${book_image}" alt="${author} ${title}" loading="lazy">
    <p class="book-card__notification">Quick view</p>
    <p class="book-card__id visually-hidden">${_id}</p>
    </div>
    <div class="book-card__info">
    <p class="info-item__title">${title}</p>
    <p class="info-item__author">${author}</p>
    </div></a>
    </li>`;
}

// колір для LastWord book-card__title

export function colorLastWordInTitle() {
  // Find title
  const galleryTitle = document.querySelector('.book-card__title');
  // Recieve text from title
  const textgalleryTitle = galleryTitle.innerHTML;
  // Make aaray from title
  let wordsArray = textgalleryTitle.split(' ');
  // Recieve last word
  let lastWord = wordsArray.pop();
  // Make value from other words
  let firstPart = wordsArray.join(' ');
  // Renew title with words, which have span with styles
  galleryTitle.innerHTML = `${firstPart} <span class="book-card__title--accent-word">${lastWord}</span>`;
}

// Color before start
colorLastWordInTitle();
