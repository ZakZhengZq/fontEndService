<template>
    <div class="article" id="articleId">
      <div v-for="(item, key, index) in articleInfor" :key="index">
        <MyArticle v-bind:item="item" :date="key"  v-if="filterKey ? filterKey === key : true"></MyArticle>
      </div>
        <pagination v-on:getArticles="updateArticles" />
    </div>
</template>

<script>
import MyArticle from './MyArticle'
import Pagination from './Pagination'
import bus from '../js/eventBus.js'
export default {
  components: {
    MyArticle,
    Pagination
  },
  data () {
    return {
      articleInfor: [],
      filterKey: '',
      isFilter: false
    }
  },
  created () {
    bus.$on('sendMsgToInhours', (msg) => {
      if (msg.indexOf('-') >= 0) {
        if (!this.isFilter) {
          this.filterKey = msg
          this.isFilter = true
        } else {
          this.filterKey = ''
          this.isFilter = false
        }
      }
    })
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
