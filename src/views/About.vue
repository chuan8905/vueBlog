<template>
  <div class="about_page">
    <Divider> <h1>关于本站</h1></Divider>
       <img src="../public/logo.png" alt="logo">
    <div class="web-introduce">
      <p>Hi !</p>
      <p style="text-indent:2em" >我是本博客的博主，对于你的光临我深感荣幸。也许你也已经感觉到本站简而不陋，色调平平无奇。</p>
      <p>但包含了许许多多的优质内容和个人情感。或许我们素未谋面，又或者只是萍水相逢。在此我都非常感谢你的支持。
        如果你对本站有什么意见，可以从主页中获得与我联系。
      </p>
      <p style="text-indent:2em">下面有对本站的评星，希望你能对本站给出合理的评价！</p>
    </div>
    <Rate v-model="value" />
  </div>
</template>

<script>
export default {
   data () {
        return {
            value: 0
        }
    }
}
</script>

<style scoped>
  .about_page{
    background-color: #fff;
    text-align: center;
    padding: 20px 60px;
  }
  .about_page img {
    height: 200px;
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
    .web-introduce{
      text-align: left;
      margin: 100px auto;
      width: 100%;
      height: auto;
      padding: 10px;
      border: 10px solid;
      border-image: repeating-linear-gradient(-225deg, red 0, red 10px, transparent 10px, transparent 20px, #58a 20px, #58a 30px, transparent 30px, transparent 40px) 20;
        }

</style>