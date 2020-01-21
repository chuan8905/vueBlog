<template>
  <div class="tagcloud_page">
      <Card :padding="0" shadow style="width: 300px;padding:0 0 20px  0">
            <p slot="title">
                <Icon type="md-pricetag" />
                标签云
            </p>
           <ul class="tag">
                <Tag color="default">default</Tag>
                <Tag color="primary">primary</Tag>
                <Tag color="success">success</Tag>
                <Tag color="error">error</Tag>
                <Tag color="warning">warning</Tag>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="yellow">yellow</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
                <Tag color="#FFA2D3">Custom Color</Tag>
           </ul>
        </Card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .tagcloud_page{
        margin-top: 20px
    }
    .tag{
        padding-left: 10px;
        padding-top: 6px;
    }
</style>>

</style>