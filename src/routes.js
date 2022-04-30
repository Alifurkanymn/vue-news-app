import Business from "./components/Categories/BusinessNews.vue"
import Entertainment from "./components/Categories/EntertainmentNews.vue"
import Health from "./components/Categories/HealthNews.vue"
import Science from "./components/Categories/ScienceNews.vue"
import Sports from "./components/Categories/SportsNews.vue"
import Technology from "./components/Categories/TechnologyNews.vue"
import Details from "./components/Detail/Details.vue"
import Home from "./components/HomePage/Content/Home.vue"
import Search from "./components/Search/Search.vue"

const routes =[
    { path: '/', component: Home},
    { path: '/details', component: Details},    
    { path: '/business', component: Business},
    { path: '/entertainment', component: Entertainment},
    { path: '/health', component: Health},
    { path: '/science', component: Science},
    { path: '/sports', component: Sports},
    { path: '/technology', component: Technology},
    { path: '/search', component: Search},
];

export default routes