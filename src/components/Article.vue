<template>
    <div class="article" id="articleId">
        <MyArticle v-show="!if_tools" v-for="(item, key, index) in articleInfor" v-bind:item="item" :date="key" :key="index"></MyArticle>
        <Tools v-show="if_tools" v-for="(item, key, index) in articleInfor" v-bind:item="item" :date="key" :key="index+10"></Tools>
        <pagination v-on:getArticles="updateArticles" />
    </div>
</template>

<script>
import MyArticle from './MyArticle'
import Pagination from './Pagination'
import Tools from './Tools'
export default {
  components: {
    MyArticle,
    Pagination,
    Tools
  },
  data () {
    return {
      articleInfor: [],
      if_tools: this.$route.path.indexOf('tools') > 0
    }
  },
  watch: {
    tools: function (val) {
      console.log(this.$route.path, this.$route.path.indexOf('tools'))
    }
  },
  methods: {
    updateArticles: function (arts) {
      this.articleInfor = arts
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
