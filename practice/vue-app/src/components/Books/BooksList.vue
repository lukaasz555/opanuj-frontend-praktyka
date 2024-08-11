<template>
  <div class="list--container">
    <p>Books list</p>
    <BooksListItem
      v-for="book in booksList"
      :key="book.id"
      :id="book.id"
      :authors="book.authors"
      :title="book.title"
      :is-favorite="book.isFavorite"
    />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import BooksListItem from './BooksListItem.vue';
import { BOOKS_LIST } from '../../constants/BOOKS_LIST';

const booksList = inject(BOOKS_LIST);
</script>

<style scoped lang="css">
.list--container {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
}
</style>
