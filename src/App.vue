<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Details />
  </div>
</template>

<script>
import Header from './components/HomePage/Header/Header.vue'
import Details from './components/Detail/Details.vue'


export default {
  name: 'App',
  components: {
    Header,
    Details
}
}
</script>

<style>
*{
  margin:0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
body{
  background-color: #F7FAFD;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
