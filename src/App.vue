<style scoped>

    .ivu-layout-header{
        z-index: 100;
    }
    .ivu-menu-horizontal.ivu-menu-light:after{
    content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .layout{
        /* border: 1px solid #d7dde4; */
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        float: left;
        position: relative;
        top: 13px;
        left: 20px;
    }
    .layout-logo img{
       width: 120px;
    }
    .layout-nav{
        width: 550px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
        background-color: #545863;
        color: #fff;
    }
    li.ivu-menu-item{
      padding: 0;
      margin: 0 20px
    }
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <div class="layout">
        <Layout>
          <keep-alive>
            <Header :style="{position: 'fixed', width: '100%',background: '#fff'}">
                <Row>
                     <Col :md="24" :lg="24" :sm="0" :xs="0"> 
                    <Menu mode="horizontal"  :active-name="$route.path" >
                        <div class="layout-logo">
                        <router-link to="/">
                            <img src="./public/logo.png" alt="logo">
                        </router-link>
                        </div>
                        <div class="layout-nav">
                            <MenuItem name="/" to="/">
                                <Icon type="ios-home" />
                                主页
                            </MenuItem>
                            <MenuItem name="/technology" to="/technology">
                                <Icon type="ios-navigate" />
                                技术杂谈
                            </MenuItem>
                            <MenuItem name="/life"  to="/life"> 
                                <Icon type="ios-cafe" />
                                生活随笔
                            </MenuItem>
                            <MenuItem name="/msgboard" to="/msgboard">
                                <Icon type="ios-create" />
                                投稿
                            </MenuItem>
                            <MenuItem name="/about" to="/about">
                                <Icon type="ios-paper" />
                                关于
                            </MenuItem>
                        </div>
                    </Menu>
                    </Col>
                     <Col :md="0" :lg="0" :sm="24" :xs="24">
                        <div class="layout-logo">
                            <router-link to="/">
                                <img src="./public/logo.png" alt="logo">
                            </router-link>
                        </div>

                        <Dropdown trigger="click" style="margin-left: 20px;float:right">
                            <Button type="primary">
                                <Icon type="ios-apps" />
                            </Button>
                            <DropdownMenu slot="list">
                                <Menu mode="horizontal"  :active-name="$route.path" >
                                    <DropdownItem>
                                        <MenuItem name="/" to="/">
                                            <Icon type="ios-home" />
                                            主页
                                        </MenuItem>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <MenuItem name="/technology" to="/technology">
                                            <Icon type="ios-navigate" />
                                            技术杂谈
                                        </MenuItem>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <MenuItem name="/life"  to="/life"> 
                                            <Icon type="ios-cafe" />
                                            生活随笔
                                        </MenuItem>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <MenuItem name="/msgboard" to="/msgboard">
                                            <Icon type="ios-create" />
                                            投稿
                                        </MenuItem>
                                    </DropdownItem>
                                    <DropdownItem >
                                        <MenuItem name="/about" to="/about">
                                            <Icon type="ios-paper" />
                                            关于
                                        </MenuItem>
                                    </DropdownItem>
                                </Menu>
                            </DropdownMenu>
                        </Dropdown>
                     </Col>
                </Row>
            </Header>
            </keep-alive>
            <Content :style="{margin: '88px 0', minHeight: '100px'}">
                <Row type="flex" justify="center" class="code-row-bg">
                    <Col :xs="1" :sm="2" :md="3" :lg="3"></Col>
                    <Col :xs="22" :sm="20" :md="18" :lg="18">
                         <router-view></router-view>
                    </Col>
                    <Col :xs="1" :sm="2" :md="3" :lg="3"></Col>
                </Row>
            </Content>
            <BackTop :height="100" :bottom="200">
                <div class="top">返回顶端</div>
            </BackTop>
            <Footer class="layout-footer-center">2020-2021 &copy; LSC.com</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        data(){
          return{
             activemenu:'1'  // 高亮
          }
        },
        computed:{
        },
        methods:{
         
        },
        mounted(){  
        },
        
        beforeDestroy(){
          
        }
    }
</script>
