import { InjectionKey } from 'vue';
import { Book } from '../models/Book';

export const BOOKS_LIST: InjectionKey<Book[]> = Symbol('books-list');
