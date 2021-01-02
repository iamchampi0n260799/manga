<template>
  <div>
    <div v-if="is_data_fetched">
      <div class="container" v-for="(chapterImage , index) in chapterEndpoint.chapter_image" :key="index">
        <div>
          <img class="chapterImage" v-bind:src="chapterImage.chapter_image_link" alt="">
        </div>
        <div v-if="fetchFailed">
          <h1>WRONG API...</h1>
        </div>
      </div>
    </div>
      
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: "ChapterManga",
    data: function(){
      return {
        paramsChapterEndpoint: this.$route.params.chapterEndpoint,
        chapterEndpoint: null,
        is_data_fetched: false,
        fetchFailed: false
        }
    },
    mounted: function(){
      //mangamint.kaedenoki.net/api/chapter/${this.$route.params.chapterEndpoint}
      axios({
        url: `https://mangamint.kaedenoki.net/api/chapter/${this.paramsChapterEndpoint}`,
        method: "GET"
      }).then((result) => {
        console.log(result.data)
        if(result.data.chapter_pages > 0){
          this.chapterEndpoint = result.data;
          this.is_data_fetched = true;
        }
       
      }).catch((err) => {
        console.log(err)
      })
    }
}
</script>

<style>
.chapterImage{
  width: 1200px;
  height: auto;
}
</style>