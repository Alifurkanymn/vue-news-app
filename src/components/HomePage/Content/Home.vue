<template>
    <div>
        <Lastest />
        <FeaturedNews />
        <OtherNews />
    </div>
</template>

<script>
import FeaturedNews from './FeaturedNews.vue'
import Lastest from './LatestNews.vue'
import OtherNews from './OtherNews.vue'
export default {
    components: {
    FeaturedNews,
    Lastest,
    OtherNews,  
  }
}
</script>