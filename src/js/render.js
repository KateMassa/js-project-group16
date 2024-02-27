import BookAPI from "./fetchAPI";

export const categoryList = document.querySelector('.category-list'),
  galleryList = document.querySelector('.gallery-list'),
  allCategories = document.querySelector('#all-categories'),
  categoryName = document.querySelector('.category-title');

const bookAPI = new BookAPI();

async function showCategoryList() {
  try {
    const response = await bookAPI.fetchCategories();
    renderCategory(response);
    allCategories.classList.add('active');
  } catch (error) {
    console.log("Failed to render show category list:", error);
  }
}

showCategoryList();

async function showAllCategories() {
  document.querySelectorAll('.category-list-item').forEach(item => item.classList.remove('active'));
  try {
    const response = await bookAPI.fetchTopCategories();
    for (let i = 0; i < 4; i++) {
      renderListGroup(response[i]);
    }
    const highlightCategory = document.querySelector('.category-list-item');
    highlightCategory.classList.add('active'); //highlight all categories category item

  } catch (error) {
    console.error("Failed to fetch all categories:", error);
  }
  document.querySelectorAll('.see-more-btn').forEach(
    item => item.addEventListener('click', renderPageByCategory)
  );
}

showAllCategories();

function renderCategory(data) {
  const markup = data.map(({ list_name }) => {
    return `
        <li class="category-list-item">
            <h4 class="category-name">${list_name}</h4>
        </li>`;
  }).join('');
  categoryList.innerHTML += markup;
}

function renderBooks(data) {
  const markup = data.map(({ _id, book_image, author, title }) => {
    return `
        <li class="gallery-item" id="${_id}">
            <img src="${book_image}" alt="" class="book-cover" />
            <h3 class="book-title">${isCorrectTextLength(title)}</h3>
            <h5 class="book-author">${isCorrectTextLength(author)}</h5>
        </li>`
  }).join('');
  return markup;
}

function renderListGroup(data) {
  const categoryTitle = 'Best Sellers Books';
  renderCategoryTitleByColors(categoryTitle);

  const { list_name, books } = data;
  const markup = `
    <li class="gallery-list-group">
      <h3 class="list-group-name">${list_name}</h3>
        <ul class="gallery-list-item">
          ${renderBooks(books)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>`;
  galleryList.innerHTML += markup;
}

function renderListByCategory(data) {
  const categoryTitle = data[0].list_name; //беремо назву категорії у першого елемента
  renderCategoryTitleByColors(categoryTitle);
  const markup = renderBooks(data);
  galleryList.innerHTML = markup;
}

async function renderPageByCategory(e) {
  const categoryName = e.target.closest('li').children[0].textContent;

  try {
    const response = await bookAPI.fetchBooksByCategory(categoryName);
    galleryList.innerHTML = '';

    if (response.length != 0) {
      galleryList.style.cssText = 'flex-direction: row; flex-wrap: wrap';
      renderListByCategory(response);
      document.querySelectorAll('.category-list-item').forEach(item => item.classList.remove('active'));
    } else {
      showAllCategories();
    }
    e.target.closest('li').classList.add('active'); //highlight category name
  } catch (error) {
    console.error("Failed to render page by category:", error);
  }
}

function isCorrectTextLength(text) {
  const maximumSymbolsCount = 15;
  return (text.length >= maximumSymbolsCount) ? `${text.slice(0, maximumSymbolsCount)}...` : text;
}

function renderCategoryTitleByColors(categoryTitle) {
  let arrayFromBlackWords = categoryTitle.split(' ');
  const blueWord = arrayFromBlackWords[arrayFromBlackWords.length - 1];
  arrayFromBlackWords = arrayFromBlackWords.slice(0, arrayFromBlackWords.length - 1);
  const blackWords = arrayFromBlackWords.join(' ');

  categoryName.textContent = `${blackWords}`;
  categoryName.nextElementSibling.textContent = `${blueWord}`;
}

//додаємо обробники подій
categoryList.addEventListener('click', renderPageByCategory);
allCategories.addEventListener('click', showAllCategories);