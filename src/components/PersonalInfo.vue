<template>
  <div class="tagcloud_page">
   <div>
        <Card :padding="0" shadow style="width: 300px;padding:0 0 20px  0">
          <div slot="title">
              <div class="demo-avatar">
                <Avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578826556984&di=251267259cf6ffe68ab1b5f6ecc060b1&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F5%2Fb8%2F01ab1170601.jpg" size="large" />
              </div>
              <p class="center name">HappChuan</p>
              <p class="center motto">时间从来不语，却回答了所有的问题</p>
            </div>
            <table class="info">
              <tr class="info-title">
                <td>文章</td><td>分类</td><td>评论</td>
              </tr>
              <tr class="info-number">
                <td>22</td><td>222</td><td>43443</td>
              </tr>
            </table>
        </Card>
    </div>
  </div>
</template>

<script>
export default {
   data () {
            return {
                switchValue: true
            }
        },
}
</script>

<style scoped>
  .center{
    text-align: center
  }
  .name{
    font-family: Couriernow Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-top: 10px;
    font-weight: bold
  }
  .demo-avatar{
    text-align: center
  }
  .motto{
    font-size: 12px
  }
  .info{
    width: 300px;
    text-align: center;
    margin-top: 10px
  }
  .info-title{
    color: #999
  }
  .info-number{
    color: #78A5F1
  }
</style>