<template>
    <div class="search-bar">
      <input 
        type="text" 
        placeholder="Поиск рецептов..." 
        v-model="searchTerm"
        @input="handleSearch"
      >
      <i class="fas fa-search"></i>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchTerm: ''
      };
    },
    methods: {
      handleSearch() {
        this.$emit('search', this.searchTerm);
      }
    }
  };
  </script>
  