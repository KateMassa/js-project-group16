import axios from 'axios';

export class BookAPI {
  #BASE_URL = 'https://books-backend.p.goit.global/books';

  constructor() {
    this.category = '';
    this.id = '';
  }

  //   Метод для отримання списку категорій (повертає масив з назвами категорій)
  getBooksCategoriesList() {
    return axios.get(`${this.#BASE_URL}/category-list`);
  }

  //   Метод для отримання списку бестселлерів по категоріях (повертає масив)
  getTopBooks() {
    return axios.get(`${this.#BASE_URL}/top-books`);
  }

  //   Метод для отримання масиву книг з обраної категорії
  getSelectedCategoryBooks() {
    return axios.get(`${this.#BASE_URL}/category?category=${this.category}`);
  }

  //   Метод для отримання інформації про книгу за її унікальним ідентифікатором
  getBookInfo() {
    // console.log(this.id);
    return axios.get(`${this.#BASE_URL}/${this.id}`);
  }
}
