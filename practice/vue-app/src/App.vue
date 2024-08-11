<template>
  <BooksView />
</template>

<script setup lang="ts">
import { onUnmounted, provide, ref } from 'vue';
import BooksView from './components/Books/BooksView.vue';
import { LocalStorageEnum } from './enums/LocalStorage.enum';
import { Book } from './models/Book';
import { BOOKS_LIST } from './constants/BOOKS_LIST';
import { booksEmitter } from './data/booksEmitter';
import { EmitterActionsEnum } from './enums/EmitterActions.enum';
import { IBook } from './interfaces/IBook';

const retrieveBooksFromLocalStorage = (): Book[] => {
  const books = JSON.parse(
    localStorage.getItem(LocalStorageEnum.BOOKS_APP_BOOKS_LIST) ?? '[]'
  ) as IBook[];
  return books.map((book) => new Book(book));
};

const booksList = ref<Book[]>(retrieveBooksFromLocalStorage());
provide(BOOKS_LIST, booksList.value);

const updateBooksList = () => {
  const newList = retrieveBooksFromLocalStorage();
  booksList.value = newList;
};

booksEmitter.on(EmitterActionsEnum.BOOKS_UPDATED, updateBooksList);

onUnmounted(() => {
  booksEmitter.off(EmitterActionsEnum.BOOKS_UPDATED, updateBooksList);
});
</script>
