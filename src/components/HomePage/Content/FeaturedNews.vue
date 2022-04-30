<template>
    <div class="featured">
        <div class="title">
            <h1>Featured News</h1>
        </div>
        <div class="parent">
            <div v-for="content in newsData.articles.slice(1,5)" :key="content.id" class="featuredContent">
            <div class="news">
                <img v-bind:src="content.urlToImage">
                <h2>{{content.title}}</h2>
                <div class="details">
                      <h4>{{content.author}} |</h4>
                      <h5>{{content.publishedAt.slice(11,19)}}</h5>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import '../../../style/HomePage/FeaturedNews.css'
export default {
    data(){
        return{

        }
    },
    computed:{
      newsData(){
          return this.$store.getters.featuredData
      }
    },
    created(){
        this.$store.dispatch('initFeaturedNews')
    }
}
</script>