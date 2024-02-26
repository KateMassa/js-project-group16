document.addEventListener('DOMContentLoaded', function () {
  fetchCategories();
});

const apiUrl = 'https://books-backend.p.goit.global/books/category-list';

async function fetchCategories() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('HTTP error: ' + response.status);
    }
    const categories = await response.json();
    displayCategories(categories);
  } catch (error) {
    alert('Error: ' + error.message);
  }
}

function displayCategories(categories) {
  const listContainer = document.getElementById('category-list');
  const list = document.createElement('ul');

  categories.forEach(category => {
    const listItem = document.createElement('li');
    listItem.textContent = category;
    list.appendChild(listItem);
  });

  listContainer.appendChild(list);
}

fetchCategories();

console.log(displayCategories(categories));
