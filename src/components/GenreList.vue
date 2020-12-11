<template>
  <div class="genre-list">
    <!-- Example single danger button -->
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-success dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Thể loại
      </button>
      <div class="dropdown-menu">
        <a
          v-for="genre in genreList"
          :key="genre.genre_name"
          class="dropdown-item"
          href=""
          >{{ genre.genre_name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GenreList",
  data: () => {
    return {
      genreList: null,
    };
  },
  mounted() {
    axios({
      url: `https://mangamint.kaedenoki.net/api/genres`,
      method: "GET",
    })
      .then((result) => {
        this.genreList = result.data.list_genre;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style>
.genre-list {
  background-color: black;
  padding: 20px;
}
.dropdown-menu {
  width: 300px;
}
</style>