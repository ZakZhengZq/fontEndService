<template>
    <div class="layout">
        <Layout style="height:100%">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1" style="z-index:8;">
                    <div class="layout-logo">
                      <span class="title">PersonalBlog 管理中心</span>
                    </div>
                    <div class="layout-nav">
                        <!-- <MenuItem name="3" @on-select="toIndex" class="back">
                            <Icon type="reply"></Icon>
                            返回首页
                        </MenuItem> -->
                        <MenuItem name="4" class="user">
                            <Poptip
                                style="color: #aaa;"
                                confirm
                                title="退出登录?"
                                @on-ok="ok"
                                @on-cancel="cancel">
                                    <Icon type="person"></Icon>
                                    管理员
                            </Poptip>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff', 'z-index':8}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                文章管理
                            </template>
                            <MenuItem name="1-1"><router-link to="/deletearticle">查找或删除文章</router-link></MenuItem>
                            <MenuItem name="1-2"><router-link to="/addarticle">新增文章</router-link></MenuItem>
                            <MenuItem name="1-3"><router-link to="/changearticle">修改文章</router-link></MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                工具管理
                            </template>
                            <MenuItem name="2-1"><router-link to="/deletetools">查找或删除工具</router-link></MenuItem>
                            <MenuItem name="2-2"><router-link to="/addtool">新增工具</router-link></MenuItem>
                            <MenuItem name="2-3"><router-link to="/changetool">修改工具</router-link></MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                网站统计
                            </template>
                            <MenuItem name="3-1"><router-link to="/typeprecent">类型占比</router-link></MenuItem>
                            <MenuItem name="3-2"><router-link to="/liulang">月流量统计</router-link></MenuItem>
                            <MenuItem name="3-3"><router-link to="/huanying">类型热度排名</router-link></MenuItem>
                            <MenuItem name="3-3"><router-link to="/map">流量地图</router-link></MenuItem>
                        </Submenu>
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                信息管理
                            </template>
                            <MenuItem name="1-1"><router-link to="/changepwd">修改密码</router-link></MenuItem>
                            <!-- <MenuItem name="1-2"><router-link to="/addarticle">新增文章</router-link></MenuItem>
                            <MenuItem name="1-3"><router-link to="/changearticle">修改文章</router-link></MenuItem> -->
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                    <!-- <div style="padding:24px; minHeight:280px; background-color:#fff;">
                        <router-view></router-view>
                    </div> -->
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
/* eslint-disable */ 
export default {
    methods: {
        ok () {
            localStorage.flag = ''
            this.$router.push({path: '/managerlogin'});
            this.$Message.info('已退出');
        },
        toIndex () {
            console.log('dsa')
            localStorage.flag = ''
            this.$router.push({path: '/blog'});
            this.$Message.info('已退出');
        },
        cancel () {
            this.$Message.info('已取消！');
        }
    }
}
</script>
<style scoped>
.back{
    position: absolute;
    right: 100px;
}
.user{
    position: absolute;
    right: 20px;
}
.title{
    position: absolute;
    top: -13px;
    left: 20px;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
}
.layout-logo{
    width: 180px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    color: aliceblue;
    text-align:center;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
