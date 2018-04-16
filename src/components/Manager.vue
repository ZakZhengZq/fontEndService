<template>
  <div style="overflow: hidden;">
    <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
  </div>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import 'simplemde/dist/simplemde.min.css'
export default {
  components: {
    markdownEditor
  },
  data () {
    return {
      content: ''
    }
  },
  // watch: {
  //   content: function (val) {
  //     console.log(val)
  //   }
  // },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
