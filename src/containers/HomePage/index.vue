<template>
  <div class="genre-list">
    <!-- Example single danger button -->
    <GenreList />
    <MangaList />
  </div>
</template>

<script>
import MangaList from "./components/MangaList"
import GenreList from "./components/GenreList"

export default {
  name: "Home",
  components: {
    MangaList,
    GenreList,
  }
};
</script>
<style>

</style>