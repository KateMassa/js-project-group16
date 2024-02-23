import axios from 'axios';

export class BooksApi {
  constructor() {
    this.BASE_URL = 'https://books-backend.p.goit.global/books';
    this.TOP_BOOKS_ENDPOINT = '/top-books';
    this.CATEGORY_ENDPOINT = '/category?category=';
    this.CATEGORY_LIST_ENDPOINT = '/category-list';
  }

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

  async getBooksByCategory(selectedCategory) {
    try {
      const url = `${this.BASE_URL}${this.CATEGORY_ENDPOINT}${selectedCategory}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error(`Error fetching books for category '${selectedCategory}':`, error);
      throw error;
    }
  }

  async getDetails(bookId) {
    try {
      const url = `${this.BASE_URL}/${bookId}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error(`Error fetching details for book with ID '${bookId}':`, error);
      throw error;
    }
  }

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
