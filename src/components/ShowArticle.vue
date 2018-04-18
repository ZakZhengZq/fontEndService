<template>
  <div>
    <div ref="art" style="overflow: hidden"></div>
    <div class="comments">
      <vue-disqus shortname="hunters-blog" :identifier="dq_id" :url="dq_url" :title="title"></vue-disqus>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { markdown } from 'markdown'
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
      title: ''
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
          this.$refs.art.innerHTML = markdown.toHTML(response.data[0].article)
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
