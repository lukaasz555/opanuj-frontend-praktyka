import '@testing-library/jest-dom';
import { beforeEach, describe } from 'node:test';
import { expect, test, vi } from 'vitest';
import BooksForm from './BooksForm.vue';
import { fireEvent, render, screen } from '@testing-library/vue';
import { IBook } from '../../interfaces/IBook';
import { addBook } from '../../services/books.service';

const testBook: IBook = {
  title: 'Test Book',
  authors: ['Test Author'],
  id: 0,
};

vi.mock('../../services/books.service', () => ({
  addBook: vi.fn(),
}));

vi.mock('../../data/booksEmitter', () => ({
  booksEmitter: {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  },
}));

beforeEach(() => {
  vi.clearAllMocks();
});

describe('BooksForm', () => {
  test('should render a BooksForm components', async () => {
    render(BooksForm);
    const bookTitleInput = screen.getByPlaceholderText('Book title');
    const bookAuthorsInput = screen.getByPlaceholderText('Author');
    const addButton = screen.getByRole('button', { name: 'Add book' });
    expect(bookTitleInput).toBeInTheDocument();
    expect(bookAuthorsInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('should add a TestBook to the list', async () => {
    render(BooksForm);
    const titleInput = screen.getByPlaceholderText('Book title');
    const bookAuthorsInput = screen.getByPlaceholderText('Author');
    const addButton = screen.getByRole('button', { name: 'Add book' });

    await fireEvent.update(titleInput, testBook.title);
    await fireEvent.update(bookAuthorsInput, testBook.authors.join(','));
    await fireEvent.click(addButton);

    expect(addBook).toHaveBeenCalledWith(
      expect.objectContaining({
        title: testBook.title,
        authors: testBook.authors,
      })
    );
  });
});
