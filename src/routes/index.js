import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../containers/HomePage'
import DetailManga from '../containers/HomePage/DetailPage'
import GenrePage from '../containers/HomePage/GenrePage'
import ChapterManga from "../containers/HomePage/ChapterManga"
Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/manga/detail/:mangaName', name: "mangaDetail" ,component: DetailManga},
        {path: '/manga/detail/chapter/:chapterEndpoint', name: "chapterEndpoint" ,component: ChapterManga},
        {path: '/genres/:genreName/:page', name: "genrePage" ,component: GenrePage},
        
    ],
    
})