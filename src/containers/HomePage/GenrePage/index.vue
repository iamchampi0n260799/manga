<template>
  <div class="hello">
    <h1 class="text-center text-primary font-weight-bold">Danh sách {{ paramsGenreName }} manga:</h1>
    <div class="container">
      <div class="row">
        <div
          v-for="manga in mangaFilterByGenre"
          :key="manga.title"
          class="col-3"
        >
          <div class="card" style="width: 18rem">
            <img v-bind:src="manga.thumb" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ manga.title | shortCut }}</h5>
              <router-link
                :to="{
                  name: 'mangaDetail',
                  params: { mangaName: manga.title },
                }"
                >Đọc truyện này</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="container mt-5" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">{{ paramsPage }}</a>
        </li>
        <li v-on:click="paramsPage += 1" class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "GenrePage",
  data: function () {
    return {
      paramsGenreName: this.$route.params.genreName,
      paramsPage: parseInt(this.$route.params.page),
      mangaFilterByGenre: null,
    };
  },
  methods: {
    fetch: function () {
      let $vm = this;

      // Start
      // params name = One Piece
      // phải modify lại thành one-piece thì mới gọi đc api
      let name = $vm.paramsGenreName;
      let arrayName = name.split(" ");
      let result = [];
      for (let i = 0; i < arrayName.length; i++) {
        result.push(
          arrayName[i].charAt(0).toLowerCase() + arrayName[i].slice(1)
        );
      }
      let stringResult = "";
      for (let i = 0; i < result.length; i++) {
        stringResult += result[i] + "-";
      }
      let lastResult = stringResult.slice(0, -1);
      const baseURI = `https://mangamint.kaedenoki.net/api/genres/${lastResult}/${$vm.paramsPage}`;
      Axios.get(baseURI).then((result) => {
        console.log(result.data);
        $vm.mangaFilterByGenre = result.data.manga_list;
      });
    },
  },
  filters: {
    shortCut: function (value) {
      return value.length > 30 ? value.substr(0, 30) + "..." : value;
    },
  },
  mounted: function () {
    this.fetch();
  },
  updated: function () {
    this.$nextTick(function () {
      this.fetch();
    });
  },
};
</script>

<style>
.card {
  width: 185px;
  height: 250px;
  padding: 20px;
  border: none;
}
.col-3 {
  height: 300px;
}
.card-title {
  height: 50px;
}
.card-img-top {
  border-bottom: 7px solid gold;
  transition: all 0.5s;
}
.card-img-top:hover {
  transform: scale(1.1);
}
</style>