<template>
  <div class="saying_page">
      <Card :padding="0" shadow style="width: 300px;padding:0 0 20px  0">
            <p slot="title">
                <Icon type="ios-book" />
                语录
            </p>
            <Scroll :on-reach-bottom="handleReachBottom" >
                <Card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 10px 10px">
                    Content {{ item }}
                 </Card>
            </Scroll>
        </Card>
  </div>
</template>

<script>
 export default {
        data () {
            return {
                list1: ['时间从来不语，却回答了所有的问题时间从来不语，却回答了所有的问题', 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list1[this.list1.length - 1];
                        for (let i = 1; i < 11; i++) {
                            this.list1.push(last + i);
                        }
                        resolve();
                    }, 2000);
                });
            }
        }
    }
</script>

<style scoped>
   
</style>>

</style>