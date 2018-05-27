<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
/* eslint-disable */ 
  export default {
    created: function () {
      this.chartData = {
        columns: ['日期', '来自文章推广', '来自网页搜索'],
        rows: [
          { '日期': '5月30日', '来自文章推广': 8, '来自网页搜索': 5},
          { '日期': '5月31日', '来自文章推广': 12, '来自网页搜索': 3},
          { '日期': '6月1日', '来自文章推广': 21, '来自网页搜索': 5},
          { '日期': '6月2日', '来自文章推广': 4, '来自网页搜索': 12},
          { '日期': '6月3日', '来自文章推广': 16, '来自网页搜索': 13},
          { '日期': '6月4日', '来自文章推广': 3, '来自网页搜索': 7}
        ]
      }
      this.chartSettings = {
        stack: { '总流量': ['来自文章推广', '来自网页搜索'] },
        area: true
      }
    }
  }
</script>
