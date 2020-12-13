<template>
  <div class="container">
    <div v-if="detailManga != null" class="detail-manga">
      <img class="detail-manga-image" v-bind:src="detailManga.thumb">
      <div class="information mb-3">
        <h1>{{ paramsMangaName }}</h1>
        <p>Tác giả: <span class="highlight">{{ detailManga.author }}</span></p>
        <p>Trạng thái: <span class="highlight">{{ detailManga.status }}</span></p>
        <button class="btn btn-danger mb-3">{{ detailManga.type }}</button>
        <div class="genre mb-3">
          <button class="btn btn-primary mr-3 mb-3" v-for="(genre , index) in detailManga.genre_list" :key="index">{{ genre.genre_name }}</button>
        </div>
        <div class="contact mb-3">
          <div class="mr-3 rounded-pill"><a class="" href="">Đọc từ đầu</a></div>
          <div class="mr-3 rounded-pill"><a class="" href="">Theo dõi</a></div>
          <div class="mr-3 rounded-pill"><a class="" href="">Thích</a></div>
        </div>
      </div>
    </div>
    <h2>Danh sách chương:</h2>
    <div class="chapter">
      <ul v-for="(detail , index) in detailManga.chapter" :key="index">
        <li><a href="#">{{ detail.chapter_title }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from "axios"
export default {
  name: "DetailPage",
  data: function () {
    return {
      paramsMangaName: this.$route.params.mangaName,
      detailManga: null,
    };
  },
  mounted: function (){
    let $vm = this;
    let name = $vm.paramsMangaName;
    let arrayName = name.split(" ");
    let result = [];
    for (let i = 0; i < arrayName.length; i++) {
      result.push(arrayName[i].charAt(0).toLowerCase() + arrayName[i].slice(1));
    }
    let stringResult = "";
    for (let i = 0; i < result.length; i++) {
      stringResult += result[i] + "-";
    }
    let lastResult = stringResult.slice(0, -1);
    
    const baseURI = `https://mangamint.kaedenoki.net/api/manga/detail/${lastResult}`;
    Axios.get(baseURI).then((result) => {
      console.log(result.data)
      $vm.detailManga = result.data;
    });
  },
};
</script>
<style>
.detail-manga{
  display: flex;
}
.detail-manga-image{
  width: 240px;
  height: 300px;
  box-shadow: 0 0 8px 0 #757575;
  border-radius: 6px;
}
.information{
  margin-left: 30px;
}
.chapter{
  border: 0.5px solid black;
  width: 500px;
  padding: 30px;
  border-radius: 6px;
}
.contact{
  display: flex;
}
.contact a{
  margin: 0px auto;
  text-decoration: none;
  color: white;
  padding: 10px;
}
.contact div{
  border: 1px solid rgb(7, 243, 86);
  background-color: rgb(7, 243, 86);
  width: 120px;
  display: flex;
  opacity: 0.8;
}
.contact div:hover{
  opacity: 1;
}
.highlight{
  font-weight: 700;
}
</style>