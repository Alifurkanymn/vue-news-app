<template>
    <div class="header">
        <div class="leftBar flex">
            <div class="logo flex">
                <router-link
                    active-class="active"
                    exact
                    to="/"
                    tag="h1">
                <h1>Newws</h1>
                    
                    </router-link>
            </div>
            <div class="menu">
                <ul class="flex">
                    <router-link
                    active-class="active"
                    exact
                    to="/business"
                    tag="li">
                    Business
                    </router-link>
                    <router-link
                    active-class="active"
                    exact
                    to="/entertainment"
                    tag="li">
                    Entertainment
                    </router-link>
                    <router-link
                    active-class="active"
                    exact
                    to="/health"
                    tag="li">
                    Health
                    </router-link>
                    <router-link
                    active-class="active"
                    exact
                    to="/science"
                    tag="li">
                    Science
                    </router-link>
                    <router-link
                    active-class="active"
                    exact
                    to="/sports"
                    tag="li">
                    Sports
                    </router-link>
                    <router-link
                    active-class="active"
                    exact
                    to="/technology"
                    tag="li">
                    Technology
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="rightBar flex">
            <div class="search">
                <input type="text" v-model="search.searchData" @change="onViews()" placeholder="Search">
            </div>
            <div class="country flex">
                <h3>Country</h3>
                <select name="Country">
                    <option value="Turkey">Turkey</option>
                    <option value="USA">USA</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../style/Header/Header.css'
export default {
    data(){
        return{
            search:{
                searchData:"",
            }
        }
    },
    methods:{
        onViews(){
            this.$store.dispatch('initSerachNews',this.search.searchData)
            this.$router.push('/serach')
            if(this.search.searchData === ""){
                this.$router.push('/')
            }
        },
    },

}

</script>
