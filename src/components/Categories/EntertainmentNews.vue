<template>
    <div class="other">
        <div v-for="content in newsData.articles" :key="content.id" class="otherParent" @click="onViews(content.title)">
            <div class="image">
                <img v-bind:src="content.urlToImage" alt="Resim Yüklenemedi">
            </div>
            <div class="otherContent">
                <h2>{{content.title}}</h2>
                <p>
                    {{content.description}}
                </p>
                <div class="details">
                    <h4>{{content.author}} |</h4>
                    <h5>{{content.publishedAt.slice(11,19)}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../style/HomePage/OtherNews.css'
export default {
    data(){
        return{
        }
    },
    methods:{
        onViews(titles){
            const category = {
                category: "entertainment",
                title:titles
            }
            this.$store.dispatch('initDetailsNews', category)
            this.$router.push('/details')
        },
    },
    computed:{
      newsData(){
          return this.$store.getters.entertainmentData
      }
    },

    created() {
      this.$store.dispatch('initEntertainmentNews')
    }
}
</script>