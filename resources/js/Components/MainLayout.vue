<template>
    <div class="main-layout">
      <AppHeader />
      <main class="container">
        <slot></slot>
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from './AppHeader.vue';
  import AppFooter from './AppFooter.vue';
  
  export default {
    components: {
      AppHeader,
      AppFooter
    }
  };
  </script>
  