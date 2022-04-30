<template>
    <div class="detail">
        <div v-for="content in newsData" :key="content.id">
            <img src="../../assets/images/cinema.jpg" alt="">
            <h1>{{content.title}}</h1>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{content.description}}
            </p>
        </div>
    </div>
</template>

<script>
import '../../style/Details/details.css'
export default {
    data(){
        return{
            
        }
    },
    computed:{
      newsData(){
          return this.$store.getters.detailsData
      }
    },

    created() {
      this.$store.dispatch('initDetailsNews')
    }
}
</script>