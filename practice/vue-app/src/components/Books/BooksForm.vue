<template>
  <form>
    <input type="text" placeholder="Book title" />
    <input type="text" placeholder="Author" />
    <button type="submit">Add book</button>
  </form>
</template>

<style scoped>
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
}

button[type='submit']:hover {
  background-color: #046fe2;
}
</style>
