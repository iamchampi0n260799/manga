<template>
  <div class="header">
    <!-- Example single danger button -->
    <div class="btn-group">
      <router-link to="/">
        <button
        type="button"
        class="btn btn-warning mr-4"
      >
        Trang chủ
      </button>
      </router-link>
      
      <button
        type="button"
        class="btn btn-warning dropdown-toggle mr-4"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Thể loại
      </button>
      <button
        type="button"
        class="btn btn-warning mr-4"
      >
        Thảo luận
      </button>
      <div class="dropdown-menu">
        
            <router-link
              :to="{name: 'genrePage' , params: { genreName: genre.genre_name , page: 1 }}"
              v-for="(genre , index) in genreList"
              :key="index"
              class="dropdown-item"
              href=""
              >{{ genre.genre_name }}
              </router-link>
         
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data: () => {
    return {
      genreList: null,
    };
  },
  created() {
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
.header {
  padding: 20px;
  margin-bottom: 30px;
  background-color: rgb(255, 196, 0);
}
.dropdown-menu {
  width: 300px;
  color: white;
}
</style>