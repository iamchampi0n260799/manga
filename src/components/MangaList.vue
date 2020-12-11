<template>
  <div class="hello">
    <h1 class="text-center">Danh sách manga:</h1>
    <div class="container">
      <div class="row">
        <div v-for="manga in mangaList" :key="manga.title"  class="col-3">
          <div class="card" style="width: 18rem">
            <img v-bind:src="manga.thumb" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{manga.title}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MangaList",
  data: () => {
    return {
      mangaList: null,
    };
  },
  mounted() {
    axios({
      url: `https://mangamint.kaedenoki.net/api/manga/popular/1`,
      method: "GET",
    })
      .then((result) => {
        this.mangaList = result.data.manga_list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  width: 185px;
  height: 250px;
  padding: 20px;
  border: none;
}
</style>
