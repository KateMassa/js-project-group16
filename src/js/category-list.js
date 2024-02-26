import { BooksApi } from "./fetchAPI";
import { renderBestsellers } from "./bestsellers";
import { renderCategory } from "./renderCategory";

const booksApi = new BooksApi();
const listContainer = document.getElementById('category-list');
const allCategories = document.getElementById('all-categories')

document.addEventListener('DOMContentLoaded', async function () {
  const categories = await booksApi.getCategoryList();
  displayCategories(categories);

  const allCategories = document.getElementById('all-categories')
  allCategories.classList.add('active');
  
  // === Обробка кліку по категорії "All Categories"
  allCategories.addEventListener('click', function () {
    renderBestsellers();
  });
});

// === Створення розмітки для списку категорій книг
function displayCategories(categories) {
  const allCategoriesItem = '<li class="category-item" id="all-categories" >All categories</li>'
  const categoryMarkup = categories.map(category => {
    return `<li class="category-item">${category.list_name}</li>`;
  }).join('');

  listContainer.innerHTML = allCategoriesItem + categoryMarkup;

  // ==== Створення слухача подій і обробка кліку по категорії із списку
  listContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('category-item')) {
      // ====Видалємо клас "active" з усіх елементів списку
      const categoryItems = document.querySelectorAll('.category-item');
      categoryItems.forEach(item => {
        item.classList.remove('active');
      });

      // === Додаємо клас "active" до елементу списку, на якому був клік
      event.target.classList.add('active');

      const categoryName = event.target.textContent;
      renderCategory(categoryName);
    }
});

  
}