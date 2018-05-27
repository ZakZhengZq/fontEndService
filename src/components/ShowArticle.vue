<template>
  <div>
    <Content :style="{padding: '0 0'}">
          <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>{{artInfo.type}}</BreadcrumbItem>
            <BreadcrumbItem>{{artInfo.title}}</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div style="overflow: hidden">
              <h1 style="margin:20px 0;">{{artInfo.title}}</h1>
              <span style="margin-right:20px;">作者：{{artInfo.author}}</span>
              <span>发布日期：{{artInfo.date}}</span>
              <Icon type="eye" size=18  style="margin: 0 5px 0 20px;"/>23
              <img :src="artInfo.img" style="width: 100%; height:350px; padding: 0 2px; margin: 30px 0;">
            </div>
            <div ref="art" style="min-height: 200px;">
                Content
            </div>
          </Card>
      </Content>
      <Footer class="layout-footer-center" style="text-align:center;font-size:16px;">
        打个分吧~<Rate v-model="value"></Rate> </br>
         <Button type="warning" shape="circle" style="margin-top:20px;" @click="shang">赏</Button>
      </Footer>
      <Modal v-model="showShang" width="420">
        <p slot="header" style="text-align:center">
            <Icon type="happy" style="color:yellow;font-size:22px;"></Icon>
            <span>您的支持是我最大的动力！</span>
        </p>
        <div style="text-align:center;">
            <Spin size="large" v-if="!isShanging" style="margin-left:180px;">
            </Spin>
            <img src="../assets/shou.png" v-if="isShanging" style="width:300px;height:400px;"/>
        </div>
        <div slot="footer">
            <Button type="warning" size="large" long :loading="modal_loading" @click="cancelShang">打好啦~</Button>
        </div>
      </Modal>
      <div class="comments">
        <vue-disqus shortname="hunters-blog" :identifier="dq_id" :url="dq_url" :title="title"></vue-disqus>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import marked from 'marked'
import VueDisqus from './VueDisqus.vue'

export default {
  props: ['id'],
  components: {
    VueDisqus
  },
  data () {
    return {
      article: '',
      dq_url: location.href,
      dq_id: this.$route.path,
      title: '',
      artInfo: {},
      value: 5,
      isShanging: false,
      showShang: false 
    }
  },
  created () {
    this.getArtById(this.id)
  },
  methods: {
    getArtById (id) {
      axios.post('http://localhost:3000/blog/getArtById', {
        id
      })
        .then((response) => {
          // this.$refs.art.innerHTML = markdown.toHTML(response.data[0].article)
          this.$refs.art.innerHTML = marked(response.data[0].article)
          this.artInfo = response.data[0]
          this.title = response.data[0].title
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    shang () {
      this.showShang = true
      setTimeout(()=> this.isShanging=true, 2000)
    },
    cancelShang () {
      this.showShang = false
      this.isShanging = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
