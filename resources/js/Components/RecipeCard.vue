<template>
    <div class="recipe-card" @click="$emit('click')">
      <div class="recipe-info">
        <div class="recipe-meta">
          <span :class="['difficulty', recipe.difficulty]">{{ recipe.difficulty }}</span>
          <span class="time">{{ recipe.time }} мин</span>
        </div>
        <h3 class="recipe-title">{{ recipe.title }}</h3>
        <p class="recipe-author">{{ recipe.author }}</p>
        <div class="recipe-stats">
          <span class="views">{{ recipe.views }} просмотров</span>
          <div class="rating">
            <i class="fas fa-star"></i>
            <span class="rating-count">{{ recipe.rating }} ({{ recipe.ratingCount }})</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeCard',
    props: {
      recipe: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  