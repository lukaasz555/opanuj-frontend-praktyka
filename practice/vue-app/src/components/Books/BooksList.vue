<template>
  <div class="list--container">
    <BooksListItem
      v-for="book in mockBooks"
      :key="book.id"
      :id="book.id"
      :authors="book.authors"
      :title="book.title"
      :is-favorite="book.isFavorite"
    />
  </div>
</template>

<script setup lang="ts">
import BooksListItem from './BooksListItem.vue';
import { mockBooks } from '../../data/books';
</script>

<style scoped lang="css">
.list--container {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
}
</style>
