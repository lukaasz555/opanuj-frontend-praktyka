import { IBook } from '../interfaces/IBook';
import { Book } from '../models/Book';

const books: IBook[] = [
  {
    id: 533,
    title: 'The Hunger Games',
    authors: ['Suzanne Collins'],
  },
  {
    id: 477,
    title: 'Punching the Air',
    authors: ['Ibi Zoboi', 'Yusef Sala'],
  },
  {
    id: 637,
    title: "Harry Potter and the Philosopher's Stone",
    authors: ['J.K. Rowling'],
  },
  {
    id: 742,
    title: 'To Kill a Mockingbird',
    authors: ['Harper Lee'],
  },
  {
    id: 394,
    title: 'Pride and Prejudice',
    authors: ['Jane Austen'],
  },
  {
    id: 135,
    title: 'Twilight',
    authors: ['Stephenie Meyer'],
  },
  {
    id: 234,
    title: 'The Chronicles of Narnia',
    authors: ['C.S. Lewis'],
  },
  {
    id: 345,
    title: 'Animal Farm',
    authors: ['George Orwell'],
  },
  {
    id: 953,
    title: 'The Talisman',
    authors: ['Stephen King', 'Peter Straub'],
  },
  {
    id: 887,
    title: 'Relic',
    authors: ['Douglas Preston', 'Lincoln Child'],
  },
];

export const getBooks = (): Book[] => {
  return books.map((book) => {
    const { id, title, authors } = book;
    return new Book({ id, title, authors });
  });
};

export const mockBooks = getBooks();
