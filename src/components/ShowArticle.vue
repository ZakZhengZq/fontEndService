<template>
<div ref="art" style="overflow: hidden"></div>
</template>

<script>
import axios from 'axios'
import { markdown } from 'markdown'

export default {
  props: ['id'],
  data () {
    return {
      article: ''
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
