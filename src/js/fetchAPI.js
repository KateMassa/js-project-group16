import axios from 'axios';

export class BooksApi {
  constructor() {
    this.BASE_URL = 'https://books-backend.p.goit.global/books';
    this.TOP_BOOKS_ENDPOINT = '/top-books';
    this.CATEGORY_ENDPOINT = '/category?category=';
    this.CATEGORY_LIST_ENDPOINT = '/category-list';
  }

  //==== Метод на отримання книг-бестселлерів
  async getTopBooks() {
    try {
      const url = `${this.BASE_URL}${this.TOP_BOOKS_ENDPOINT}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error('Error fetching popular books:', error);
      throw error;
    }
  }

  //==== Метод на отримання книг за категорією
  async getBooksByCategory(selectedCategory) {
    try {
      const url = `${this.BASE_URL}${this.CATEGORY_ENDPOINT}${selectedCategory}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error(
        `Error fetching books for category '${selectedCategory}':`,
        error
      );
      throw error;
    }
  }

  //==== Метод на отримання додаткової інформації про книгу за id
  async getDetails(bookId) {
    try {
      const url = `${this.BASE_URL}/${bookId}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error(
        `Error fetching details for book with ID '${bookId}':`,
        error
      );
      throw error;
    }
  }

  //==== Метод на отримання списку категорій книг
  async getCategoryList() {
    try {
      const url = `${this.BASE_URL}${this.CATEGORY_LIST_ENDPOINT}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error('Error fetching category list:', error);
      throw error;
    }
  }

  
}
class BookAPI {
  async fetchCategories() {
      try {
          // Виконуємо GET-запит на сервер
          const response = await axios.get(`https://books-backend.p.goit.global/books/category-list`);
          // Повертаємо дані про категорії
          return response.data;
      } catch (error) {
          console.error("Error fetching categories:", error);
          throw error;
      }
  }

  async fetchTopCategories() {
      try {
          const response = await axios.get('https://books-backend.p.goit.global/books/top-books');
          return response.data;
      } catch (error) {
          console.error("Error fetching top categories:", error);
          throw error;
      }
  }

  async fetchBooksByCategory(selectedCategory) {
      try {
          const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${selectedCategory}`);
          return response.data;
      } catch (error) {
          console.error("Error fetching books by category:", error);
          throw error;
      }
  }

  async fetchBookById(bookId) {
      try {
          const response = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);
          return response.data;
      } catch (error) {
          console.error("Error fetching book by ID:", error);
          throw error;
      }
  }
}

export default BookAPI;  
