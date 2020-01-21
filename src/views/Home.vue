<template>
  <div class="home_page">
      <Row :gutter="16">
          <Col :md="17" :lg="17" :sm="24" :xs="24">
                <div class="carBox">
                    <Carousel
                        v-model="value"
                        :autoplay="setting.autoplay"
                        :autoplay-speed="setting.autoplaySpeed"
                        :dots="setting.dots"
                        :radius-dot="setting.radiusDot"
                        :trigger="setting.trigger"
                        :arrow="setting.arrow"
                        ref="car">
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img   src="../public/img/car4.jpg" alt="">
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="../public/img/car1.jpg" alt="">
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="../public/img/car2.jpg" alt="">
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="../public/img/car3.jpg" alt="">
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div><!--carBox-->
                <Hot />
                <ArticleList />
            </Col>
            <Col :md="7" :lg="7" :sm="0" :xs="0">
                <PersonalInfo />
                <Contact />
                <TagCloud />
                <FriendlyLink />
            </Col>
      </Row>
  </div>
  
</template>

<script>
import PersonalInfo from '@/components/PersonalInfo.vue'
import TagCloud from '@/components/TagCloud.vue'
import FriendlyLink from '@/components/FriendlyLink.vue'
import Contact from '@/components/Contact.vue'
import Hot from '@/components/Hot.vue'
import ArticleList from '@/components/ArticleList.vue'
export default {
    data () {
        return {
            value: 0,
            setting: {
                autoplay: true,
                autoplaySpeed: 2000,
                dots: 'inside',
                radiusDot: true,
                trigger: 'click',
                arrow: 'hover'
            }
        }
    },
    components:{
        PersonalInfo,
        TagCloud,
        FriendlyLink,
        Contact,
        Hot,
        ArticleList
    },
    computed:{

    },
    mounted(){
        console.log(this.$refs.car.style);
        
    }
}
</script>

<style scoped>
    .carBox{
        padding: 4px;
        /* width: 800px; */
        background-color: #fff;
    }
    .demo-carousel img{
        width: 800px;
        height: 300px;
        display: inline-block;
        /* height: auto; */
        max-width: 100%;
    }

</style>