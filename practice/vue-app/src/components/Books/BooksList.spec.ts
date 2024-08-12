import { render, screen } from '@testing-library/vue';
import BooksList from './BooksList.vue';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { describe } from 'node:test';
import { mockBooks } from '../../data/books';
import { BOOKS_LIST } from '../../constants/BOOKS_LIST';

describe('BooksList', () => {
  test('should render a BooksList', async () => {
    render(BooksList);
    const booksList = screen.getByText('Books list');
    expect(booksList).toBeInTheDocument();
  });

  test('should render a first index of books list', async () => {
    const firstTitle = mockBooks[0].title;

    render(BooksList, {
      global: {
        provide: {
          [BOOKS_LIST as unknown as string]: mockBooks,
        },
      },
    });
    const firstBookItem = screen.getByText(firstTitle);
    expect(firstBookItem).toBeVisible();
  });

  test('should render a last item of books list', async () => {
    const lastTitle = mockBooks[mockBooks.length - 1].title;

    render(BooksList, {
      global: {
        provide: {
          [BOOKS_LIST as unknown as string]: mockBooks,
        },
      },
    });
    const lastBookItem = screen.getByText(lastTitle);
    expect(lastBookItem).toBeVisible();
  });
});
