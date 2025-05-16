<template>
    <div class="filters">
      <div class="filter-group">
        <label for="category">Все категории</label>
        <select id="category" v-model="filters.category" @change="applyFilters">
          <option value="all">Все категории</option>
          <option value="soups">Супы</option>
          <option value="main">Основные блюда</option>
          <option value="desserts">Десерты</option>
          <option value="salads">Салаты</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="difficulty">Сложность</label>
        <select id="difficulty" v-model="filters.difficulty" @change="applyFilters">
          <option value="all">Любая</option>
          <option value="easy">Легкая</option>
          <option value="medium">Средняя</option>
          <option value="hard">Сложная</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="time">Время приготовления</label>
        <select id="time" v-model="filters.time" @change="applyFilters">
          <option value="all">Любое</option>
          <option value="30">До 30 мин</option>
          <option value="60">До 1 часа</option>
          <option value="90">До 1.5 часов</option>
          <option value="999">Более 2 часов</option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeFilters',
    data() {
      return {
        filters: {
          category: 'all',
          difficulty: 'all',
          time: 'all'
        }
      };
    },
    methods: {
      applyFilters() {
        this.$emit('filter', this.filters);
      }
    }
  };
  </script>
  