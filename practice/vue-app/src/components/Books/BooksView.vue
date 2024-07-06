<template>
  <main>
    <Header />
    <div class="content--wrapper">
      <BooksForm />
      <BooksList />
    </div>
  </main>
</template>

<script setup lang="ts">
import Header from './Header.vue';
import BooksList from './BooksList.vue';
import BooksForm from './BooksForm.vue';
</script>

<style scoped lang="css">
main {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
}

.content--wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 20px auto;
}
</style>
