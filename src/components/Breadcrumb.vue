<template>
  <div class="breadcrumb_page">
        <Breadcrumb>
        <BreadcrumbItem to="/">
            <Icon type="ios-home-outline"></Icon> 主页
        </BreadcrumbItem  >
        <BreadcrumbItem :to="this.$route.path">
           {{title.title}}
        </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props: ['title'],
}
</script>

<style scoped>
    .breadcrumb_page{
        background-color: #fff;
    }
</style>