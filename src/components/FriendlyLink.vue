<template>
  <div class="friendiylink_page">
       <Card :padding="0" shadow style="width: 300px;padding:0 0 20px  0">
            <p slot="title">
                <Icon type="ios-link" />
                友情链接
            </p>
            <a href="http://wpa.qq.com/msgrd?v=3&uin=2292100085&site=qq&menu=yes" slot="extra" target="_blank">
             <Icon type="ios-add" size="24"/>
                <!-- Change -->
            </a>
           <ul class="tag">
               <li><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">百度</a></li>
               <li><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">百度</a></li>
               <li><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">百度</a></li>
               <li><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">百度</a></li>
               <li><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">百度</a></li>
           </ul>
        </Card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .friendiylink_page{
        margin-top: 20px;
    }
    .tag{
        padding: 6px;
        display: inline-flex;
        flex-wrap: wrap;
    }
    .tag li{
        list-style: none;
        margin-top: 6px;
        margin-left: 10px;
    }
    .tag li a{
        display: inline-block;
        width: 130px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        color: #119966;
    }
</style>