<template>
    <div class="article" id="articleId">
        <MyArticle v-for="(item, key, index) in articleInfor" v-bind:item="item" :date="key" :key="index"></MyArticle>
        <pagination v-on:getArticles="updateArticles" />
    </div>
</template>

<script>
import MyArticle from './MyArticle'
import Pagination from './Pagination'
export default {
  components: {
    MyArticle,
    Pagination
  },
  data () {
    return {
      articleInfor: []
    }
  },
  mounted () {
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
