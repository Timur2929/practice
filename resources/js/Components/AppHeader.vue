<template>
    <header>
      <div class="container">
        <nav class="navbar">
          <router-link to="/" class="logo">Blinow</router-link>
          <div class="nav-links">
            <router-link to="/create">Создать рецепт</router-link>
            <a href="">Коллекции</a>
          </div>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader'
  };
  </script>
  