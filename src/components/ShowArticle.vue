<template>
  <div>
    <div ref="art" style="overflow: hidden"></div>
    <div class="comments">
      <vue-disqus shortname="feng-kuang-da-shi-tou-de-ge-ren-wang-zhan" :identifier="dq_id" url="dq_url"></vue-disqus>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { markdown } from 'markdown'
import VueDisqus from 'vue-disqus/VueDisqus.vue'

export default {
  props: ['id'],
  components: {
    VueDisqus
  },
  data () {
    return {
      article: '',
      dq_url: location.href,
      dq_id: this.id
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
