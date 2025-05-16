<template>
  <div class="home">
    <AppHeader />
    
    <main class="container">
      <section class="hero">
        <h1>Найдите идеальный рецепт</h1>
        <SearchBar @search="handleSearch" />
        <RecipeFilters @filter="applyFilters" />
      </section>

      <section>
        <h2 class="section-title">Популярные рецепты</h2>
        <div class="recipes-grid">
          <router-link 
            v-for="recipe in filteredRecipes" 
            :key="recipe.id"
            :to="'/infoblini/' + recipe.id"
          >
            <RecipeCard :recipe="recipe" />
          </router-link>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/Components/AppHeader.vue'
import AppFooter from '@/Components/AppFooter.vue'
import SearchBar from '@/Components/SearchBar.vue'
import RecipeFilters from '@/Components/RecipeFilters.vue'
import RecipeCard from '@/Components/RecipeCard.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    SearchBar,
    RecipeFilters,
    RecipeCard
  },
  data() {
    return {
      recipes: [
        {
          id: 1,
          title: 'Домашний борщ',
          difficulty: 'medium',
          time: 90,
          author: 'Марля С.',
          views: 1200,
          rating: '4.8',
          ratingCount: 245
        },
        // Добавьте остальные рецепты...
      ],
      searchTerm: '',
      filters: {
        category: 'all',
        difficulty: 'all',
        time: 'all'
      }
    }
  },
  computed: {
    filteredRecipes() {
      return this.recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        const matchesDifficulty = this.filters.difficulty === 'all' || 
                               recipe.difficulty === this.filters.difficulty
        let matchesTime = true
        if (this.filters.time !== 'all') {
          const maxTime = parseInt(this.filters.time)
          matchesTime = recipe.time <= maxTime
        }
        return matchesSearch && matchesDifficulty && matchesTime
      })
    }
  },
  methods: {
    handleSearch(term) {
      this.searchTerm = term
    },
    applyFilters(filters) {
      this.filters = filters
    }
  }
}
</script>