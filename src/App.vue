
<template>
  <div id="app">
    <GenreList />
    <MangaList />
  </div>
</template>

<script>
import MangaList from './components/MangaList.vue'
import GenreList from './components/GenreList.vue'

export default {
  name: 'App',
  components: {
    MangaList,
    GenreList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
