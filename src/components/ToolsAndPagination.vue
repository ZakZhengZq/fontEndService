<template>
    <div class="article" id="articleId">
        <Tools v-for="(item, key, index) in articleInfor" v-bind:item="item" :date="key" :key="index"></Tools>
        <pagination v-on:getArticles="updateArticles" />
    </div>
</template>

<script>
import Pagination from './Pagination'
import Tools from './Tools'
export default {
  components: {
    Pagination,
    Tools
  },
  data () {
    return {
      articleInfor: []
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
