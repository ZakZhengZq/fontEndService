<template>
    <div class="article" id="articleId">
        <MyArticle v-for="(item, index) in articleInfor" :key="index" v-bind:item="item"></MyArticle>
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
      arts.forEach(art => {
        this.articleInfor.push(art)
      })
      console.log('up  ', this.articleInfor)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
