<template>
  <form @submit="onSubmit">
    <input v-model="bookBaseData.title" type="text" placeholder="Book title" />
    <input v-model="bookBaseData.authors" type="text" placeholder="Author" />
    <button type="submit">Add book</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BookBaseData, Book } from '../../models/Book';
import { addBook } from '../../services/books.service';
// import { BOOKS_LIST } from '../../constants/BOOKS_LIST';

const bookBaseData = ref(new BookBaseData());
// const booksList = inject(BOOKS_LIST);

const onSubmit = (event: Event) => {
  event.preventDefault();
  const newBook = new Book();
  newBook.setBaseData(bookBaseData.value);

  addBook(newBook);
  bookBaseData.value = new BookBaseData();
};
</script>

<style scoped lang="css">
form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input[type='text'] {
  padding: 8px;
  border: 1px solid #ededed;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 18px;
  border-radius: 8px;
}

button[type='submit'] {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.25s;
  will-change: background-color;
  border-radius: 8px;
}

button[type='submit']:hover {
  background-color: #046fe2;
}
</style>
