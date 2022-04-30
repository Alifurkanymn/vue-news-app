import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        otherNewsData:[],
        featuredNewsData:[],
        lastestNewsData:[],
        entertainmentNewsData:[],
        technologyNewsData:[],
        sportsNewsData:[],
        scienceNewsData:[],
        businessNewsData:[],
        healthNewsData:[],
        detailNews:[],
        searchNews:[],
    },
    getters:{
        othersData(state){
            return state.otherNewsData
        },
        featuredData(state){
            return state.featuredNewsData
        },
        lastestData(state){
            return state.lastestNewsData
        },
        entertainmentData(state){
            return state.entertainmentNewsData
        },
        technologyData(state){
            return state.technologyNewsData
        },
        sportsData(state){
            return state.sportsNewsData
        },
        scienceData(state){
            return state.scienceNewsData
        },
        businessData(state){
            return state.businessNewsData
        },
        healthData(state){
            return state.healthNewsData
        },
        detailsData(state){
            return state.detailsNewsData
        },
        searchData(state){
            return state.searchNews
        }
    },
    mutations:{
        initOtherNewsData(state,getOtherNewsData){
            state.otherNewsData = getOtherNewsData;
        },
        initFeaturedNewsData(state,getFeaturedNewsData){
            state.featuredNewsData = getFeaturedNewsData;
        },
        initLastestNewsData(state,getLastestNewsData){
            state.lastestNewsData = getLastestNewsData;
        },
        initEntertainmentNewsData(state,getEntertainmentNewsData){
            state.entertainmentNewsData = getEntertainmentNewsData
        },
        initTechnologyNewsData(state,getTechnologyNewsData){
            state.technologyNewsData = getTechnologyNewsData
        },
        initSportsNewsData(state,getSprotsNewsData){
            state.sportsNewsData = getSprotsNewsData
        },
        initScienceNewsData(state,getSciencNewsData){
            state.scienceNewsData = getSciencNewsData
        },
        initBusinessNewsData(state,getBusinessNewsData){
            state.businessNewsData = getBusinessNewsData
        },
        initHealthNewsData(state,getHealthNewsData){
            state.healthNewsData = getHealthNewsData
        },
        initDetailsData(state,getDetailsData){
            state.detailNews = getDetailsData
        },
        initSearchNewsData(state, getSearchNewsData){
            state.searchNews = getSearchNewsData
        }

    },

    actions:{
        initSerachNews(context,search){
            axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=d5b96137fb854fdf81a32509e930b6ce`)
            .then(response => {
                let data = response.data.articles
                context.commit('initSearchNewsData', data)

            })
        },
        initDetailsNews(context,category){
            console.log(category);
            axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${category.category}&apiKey=d5b96137fb854fdf81a32509e930b6ce`)
            .then(response => {
                    let data = response.data.articles
                    data.map(item =>{
                        if(item.title === category.title){
                            const detail = item;
                            context.commit('initDetailsData',detail)
                        }
                    })
                }                    
            )
            .catch(error => {console.log(error)})
        },
        initEntertainmentNews(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=d5b96137fb854fdf81a32509e930b6ce`)
            .then(response => {
                    let data = response.data;
                    context.commit('initEntertainmentNewsData',data)
                }                    
            )
            .catch(error => {console.log(error)})
        },
        initTechnologyNews(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=d5b96137fb854fdf81a32509e930b6ce`)
            .then(response => {
                    let data = response.data;
                    context.commit('initTechnologyNewsData',data)
                }                    
            )
            .catch(error => {console.log(error)})
        },
        initSportsNews(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=d5b96137fb854fdf81a32509e930b6ce`)
            .then(response => {
                    let data = response.data;
                    context.commit('initSportsNewsData',data)
                }                    
            )
            .catch(error => {console.log(error)})
        },
        initScienceNews(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=d5b96137fb854fdf81a32509e930b6ce`)
            .then(response => {
                    let data = response.data;
                    context.commit('initScienceNewsData',data)
                }                    
            )
            .catch(error => {console.log(error)})
        },
        initBusinessNews(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=d5b96137fb854fdf81a32509e930b6ce`)
            .then(response => {
                    let data = response.data;
                    context.commit('initBusinessNewsData',data)
                }                    
            )
            .catch(error => {console.log(error)})
        },
        initHealthNews(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=d5b96137fb854fdf81a32509e930b6ce`)
            .then(response => {
                    let data = response.data;
                    context.commit('initHealthNewsData',data)
                }                    
            )
            .catch(error => {console.log(error)})
        },
        initOtherNews(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=d5b96137fb854fdf81a32509e930b6ce`)
            .then(response => {
                    let data = response.data;
                    context.commit('initOtherNewsData',data)
                }                    
            )
            .catch(error => {console.log(error)})
        },
        initFeaturedNews(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=d5b96137fb854fdf81a32509e930b6ce`)
                .then(response => {
                    let data = response.data;
                    context.commit('initFeaturedNewsData', data)
                })
        },
        initLastestNews(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=d5b96137fb854fdf81a32509e930b6ce`)
                .then(response => {
                    let data = response.data;
                    context.commit('initLastestNewsData', data)
                })
        },
    }
})

export default store