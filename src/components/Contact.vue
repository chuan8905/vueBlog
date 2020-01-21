<template>
  <div class="contact_page">
       <Card :padding="0" shadow style="width: 300px;">
            <p slot="title">
                <Icon type="ios-contact" />
                个人相关
            </p>
           <ul class="tag">
               <li>
                   <a href="https://github.com/chuan8905" target="_blank" rel="noopener noreferrer"> 
                         <img src="../assets/github-logo.jpg" alt="" class="logo-img">&nbsp;&nbsp;&nbsp;&nbsp;chuan8905
                    </a>
                </li>
                <li>
                   <a href="https://blog.csdn.net/qq_42335214" target="_blank" rel="noopener noreferrer"> 
                        <img src="../assets/csdn-logo.png" alt="" class="logo-img">&nbsp;&nbsp;&nbsp;&nbsp;背包Boy
                    </a>
                </li>
                 <li>
                   <a href="http://wpa.qq.com/msgrd?v=3&uin=2292100085&site=qq&menu=yes" target="_blank" rel="noopener noreferrer"> 
                        <img src="../assets/qq-logo.jpg" alt="" class="logo-img">&nbsp;&nbsp;&nbsp;&nbsp;2292100085
                    </a>
                </li>
                 <li>
                   <a href="#" target="_blank" rel="noopener noreferrer" @click.prevent="modal = true"> 
                       <Icon type="ios-cafe" size="24"/>&nbsp;&nbsp;&nbsp;&nbsp;请我喝杯咖啡？
                    </a>
                </li>
                <Modal
                    v-model="modal"
                    title="非常感谢你的赞助"
                    >
                   <img src="../assets/wx-pay.png" alt="" class="pay-img">
                </Modal>
           </ul>
        </Card>
  </div>
</template>

<script>
export default {
     data () {
            return {
                modal: false
            }
        },
}
</script>

<style scoped>
    .contact_page{
        margin-top: 20px;
    }
    .tag li{
        list-style: none;
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        border-bottom: 1px solid #e8eaec;
    }
    .logo-img{
        width: 24px;
        /* height: 24px; */
    }
    .pay-img{
        width: 300px;
    }
</style>