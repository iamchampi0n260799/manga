<template>
  <div class="hello">
    <h1 class="text-center">Danh sách manga:</h1>
    <div class="container">
      <div class="row">
        <div v-for="manga in mangaList" :key="manga.title" class="col-3">
          <div class="card" style="width: 18rem">
            <img v-bind:src="manga.thumb" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ manga.title | shortCut }}</h5>
              <a href="#">{{ manga.chapter }}</a><br>
              <router-link :to="{ name: 'mangaDetail', params: { mangaName: manga.title }}">Đọc truyện này</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="container mt-5" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">{{ mangaListPage }}</a>
        </li>
        <li v-on:click="mangaListPage += 1"  class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>
// 
<script>
import axios from "axios";
export default {
  name: "MangaList",
  data: () => {
    return {
      mangaListPage: 1,
      mangaList: null,
    };
  },
  filters: {
  shortCut: function (value) {
    return value.length > 30 ? value.substr(0, 30) + '...' : value;
  }
},
  mounted() {
    axios({
      url: `https://mangamint.kaedenoki.net/api/manga/page/${this.mangaListPage}`,
      method: "GET",
    })
      .then((result) => {
        console.log(result.data.manga_list);
        this.mangaList = result.data.manga_list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updated: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      axios({
        url: `https://mangamint.kaedenoki.net/api/manga/page/${this.mangaListPage}`,
        method: "GET",
      })
        .then((result) => {
          this.mangaList = result.data.manga_list;
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 185px;
  height: 250px;
  padding: 20px;
  border: none;
}
.col-3 {
  height: 300px;
}
.card-title{
  height: 50px;
}
.card-img-top{
  border-bottom: 7px solid gold;
  transition: all 0.5s;
}
.card-img-top:hover{
  transform: scale(1.1);
}
</style>
