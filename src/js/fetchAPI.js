export class BooksApi {
  constructor() {
    this.BASE_URL = 'https://books-backend.p.goit.global';
    this.BOOKS_ENDPOINT = '/books';
    this.TOP_BOOKS_ENDPOINT = '/top-books';
    this.CATEGORY_ENDPOINT = '/category?category=';
  }

  async getPopularBooks() {
    try {
      const url = `${this.BASE_URL}${this.BOOKS_ENDPOINT}${this.TOP_BOOKS_ENDPOINT}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch popular books: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('Error fetching popular books:', error);
      throw error;
    }}
    
    async getBooksByCategory(selectedCategory) {
    try {
      const url = `${this.BASE_URL}${this.BOOKS_ENDPOINT}${this.CATEGORY_ENDPOINT}${selectedCategory}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch books for category '${selectedCategory}': ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(`Error fetching books for category '${selectedCategory}':`, error);
      throw error;
    }
  }

    async getDetails(bookId) {
    try {
      const url = `${this.BASE_URL}${this.BOOKS_ENDPOINT}/${bookId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch details for book with ID '${bookId}': ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(`Error fetching details for book with ID '${bookId}':`, error);
      throw error;
    }
  }
    
}