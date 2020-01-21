<template>
  <div class="technology_page">
      <Row :gutter="16">
          <Col :md="17" :lg="17" :sm="24" :xs="24">
                <Breadcrumb :title="this.$route.meta"/>
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
import ArticleList from '@/components/ArticleList.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
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
        ArticleList,
        Breadcrumb
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
    }
</style>