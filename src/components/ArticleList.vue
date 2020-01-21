<template>
  <div class="articlelist_page">
      <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.title">
            <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
            {{ item.content }}
            <template slot="action">
                <li>
                    <Icon type="ios-eye-outline" /> 123
                </li>
                <li>
                    <Icon type="ios-thumbs-up-outline" /> 234
                </li>
                <li>
                    <Icon type="ios-chatbubbles-outline" /> 345
                </li>
            </template>
            <template slot="extra">
                <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
            </template>
        </ListItem>
    </List>
      <Page :total="100" show-total class="page"/>
  </div>
</template>

<script>
export default {
     data () {
            return {
                data: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    }
                ]
            }
        }
}
</script>

<style scoped>
    .articlelist_page{
        margin-top:10px;
    }
   .ivu-list-items .ivu-list-item{
       background-color: #fff;
        padding: 10px;
        margin-top: 10px;
    }
    .page{
        margin-top: 20px;
    }
</style>