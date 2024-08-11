<template>
  <div class="item--wrapper">
    <div class="item--content">
        <p class="description--title">{{ title }}</p>
        <p class="description--author">{{ displayAuthors() }}</p>
    </div>

    <div class="item--action">
      <button class="fav">
        <img v-if="isFavorite" :src="FacIconFilled" style="max-width: 100%; max-height: 100%;" />
        <img v-else :src="FavIcon" style="max-width: 100%; max-height: 100%;"></img>
      </button>
      <button class="remove" @click="removeBook">X</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import FavIcon from '../../assets/heart.svg'
import FacIconFilled from '../../assets/heartFilled.svg'

type Props = {
  id: number;
  title: string;
  authors: string[];
  isFavorite: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  id: 1,
  title: 'title',
  authors: () => ['author1', 'author2'],
  isFavorite: false
});

const displayAuthors = () => props.authors.join(', ');

const removeBook = () => {
  console.log('should remove book with id ', props.id);
};
</script>

<style scoped lang="css">
.item--wrapper {
    border: 1px solid #ededed;
    padding: 10px 20px;
    display: flex;
    align-items: center !important;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    border-radius: 8px;
}

.item--wrapper::after {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  content: '';
  box-shadow: 4px 8px 22px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: opacity 0.25s;
  z-index: -1;
}

.item--wrapper:hover::after {
  opacity: 1;
}

.item--content {
    font-size: 18px;
    text-align: left;
}

.description--title {
    font-style: italic;
    font-weight: 600;
}

.description--author {
    color: #666;

}

.item--wrapper {
    display: flex;
    align-items: flex-start;
}

.item--action {
    display: flex;
    align-items: center;
    gap: 10px;
}
button {
  border: 1px solid #ededed;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: transparent;
  transition: background-color 0.3s;
  will-change: background-color;
}

/* button>img {
  cursor: pointer;
} */

button:hover {
    background-color: #ededed;
}

button.remove {
  font-size: 16px;
  text-align: center;
  line-height: 100%;
}

button.fav {
    display: flex;
    padding: 6px;
    
}
</style>
