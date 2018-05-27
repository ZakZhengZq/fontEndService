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
      <Footer class="layout-footer-center">2014-2018 &copy; PrivateBlog</Footer>
      <div class="comments">
      <vue-disqus shortname="hunters-blog" :identifier="dq_id" :url="dq_url" :title="title"></vue-disqus>
    </div>
  </div>
</template>

<script>
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
      artInfo: {}
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
