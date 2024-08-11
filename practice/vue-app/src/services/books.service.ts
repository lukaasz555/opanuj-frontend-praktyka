import { LocalStorageEnum } from '../enums/LocalStorage.enum';
import { Book } from '../models/Book';
import { booksEmitter } from '../data/booksEmitter';
import { EmitterActionsEnum } from '../enums/EmitterActions.enum';

export async function addBook(book: Book): Promise<void> {
  const books = JSON.parse(
    localStorage.getItem(LocalStorageEnum.BOOKS_APP_BOOKS_LIST) || '[]'
  );

  books.unshift(book);
  localStorage.setItem(
    LocalStorageEnum.BOOKS_APP_BOOKS_LIST,
    JSON.stringify(books)
  );

  booksEmitter.emit(EmitterActionsEnum.BOOKS_UPDATED);
}
