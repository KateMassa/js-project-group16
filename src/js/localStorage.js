const STORAGE_KEY = 'shoppingList';

export function isBookAlreadyExist(bookId) {
    const books = loadFromLS();
    return !!books?.some((book) => {
        if (book._id === bookId) { 
            return true
        }
        return false;
    });
}

export function saveToLS(value) {
    const storageDefault = [];
    const books = loadFromLS();
    if (books) {
        if (!isBookAlreadyExist(value._id)) {
            books.push(value);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    } else {
        storageDefault.push(value)
        const jsonData = JSON.stringify(storageDefault);
        localStorage.setItem(STORAGE_KEY, jsonData);
    }
    }

export function deleteFromLS(bookId) {
        const books = loadFromLS(STORAGE_KEY);
    const filteredBooks = books.filter(book => book._id !== bookId); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredBooks));
    }

export function loadFromLS() {
    const data = localStorage.getItem(STORAGE_KEY);
    try {
        const result = JSON.parse(data);
        return result;
    } catch {
        return data;
    }
}