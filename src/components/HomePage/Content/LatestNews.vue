<template>
  <div class="lastestNews">
    <h1>Lastest News</h1>
    <div class="parent">
        <div v-for="content in newsData.articles.slice(1,2)" :key="content.id" class="leftNews">
            <img v-bind:src="content.urlToImage" alt="Resim Yüklenemedi" />
            <div class="content">
                <h2>{{content.title}}</h2>
                <p>
                    {{content.description}}
                </p>
                <div class="details">
                    <h4>{{content.author}}</h4>
                    <h5>{{content.publishedAt.slice(11,19)}}</h5>
                </div>
            </div>
        </div>

        <div class="midNews">
            <div v-for="content in newsData.articles.slice(2,3)" :key="content.id" class="first">
                <div class="content">
                    <h2>{{content.title}}</h2>
                    <p>
                    {{content.description}}
                    </p>
                    <div class="details">
                        <h4>{{content.author}}</h4>
                        <h5>{{content.publishedAt.slice(11,19)}}</h5>
                    </div>
                </div>
            </div>
            <div v-for="content in newsData.articles.slice(3,4)" :key="content.id" class="second">
              <div class="content">
                    <h2>{{content.title}}</h2>
                    <p>
                    {{content.description}}
                    </p>
                    <div class="details">
                        <h4>{{content.author}}</h4>
                        <h5>{{content.publishedAt.slice(11,19)}}</h5>
                    </div>
                </div>
            </div>
            </div>
            <div class="rightNews">
              <div v-for="content in newsData.articles.slice(5,6)" :key="content.id" class="leftNews">
                <img v-bind:src="content.urlToImage" alt="Resim Yüklenemedi" />
                <div class="content">
                    <h2>{{content.title}}</h2>
                    <p>
                        {{content.description}}
                    </p>
                    <div class="details">
                        <h4>{{content.author}}</h4>
                        <h5>{{content.publishedAt.slice(11,19)}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import "../../../style/HomePage/LatestNews.css";
import axios from 'axios'
export default {
  data() {
    return {};
  },
  computed:{
      newsData(){
          return this.$store.getters.lastestData
      }
  },
  created() {
      this.$store.dispatch('initLastestNews')

      axios.get('https://www.mynet.com/')
      .then(response =>{
          console.log(JSON.parse(response.data))
      })
  },

};
</script>
