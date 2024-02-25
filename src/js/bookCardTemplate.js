// ==== Функція на відмальовку картки з книгою
export function createBookCard(elem, i) {
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

    return book;
}