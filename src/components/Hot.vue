<template>
  <div class="hot_page">
       <Card :padding="0" shadow style="width: 100%;">
            <p slot="title">
               <Icon type="ios-flame" />
                热门文章
            </p>
            <ul class="tag">
                <router-link tag="li"  to="/">
                    <Tag color="red">1</Tag>热门文章1
                    <div class="icon-right">
                        <Icon type="ios-eye" size="20"/>
                        2997浏览
                    </div>
                </router-link>
                <router-link tag="li" to="/">
                    <Tag color="success">2</Tag>热门文章2
                     <div class="icon-right">
                       <Icon type="ios-eye" size="20"/>
                    674浏览
                     </div>
                </router-link>
                <router-link tag="li" to="/">
                    <Tag color="primary">3</Tag>热门文章3
                    <div class="icon-right">
                        <Icon type="ios-eye" size="20"/>
                        254浏览
                     </div>
                </router-link>
            </ul>
        </Card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .hot_page{
        margin-top: 10px;
    }
   .tag li{
        list-style: none;
        margin-left: 10px;
        padding-right:20px;
    }
    .tag{
        padding: 6px;
    }
    .icon-right{
        float: right;
    }
</style>