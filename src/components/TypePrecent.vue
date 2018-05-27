<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
/* eslint-disable */ 
  export default {
    created: function () {
      this.chartData = {
        columns: ['类型', '数量'],
        rows: [
          { '类型': 'Vue', '数量': 3 },
          { '类型': '前端杂谈', '数量': 6 },
          { '类型': 'JavaScript', '数量': 9 },
          { '类型': 'HTML', '数量': 2 },
          { '类型': 'Docker', '数量': 5 },
          { '类型': '工具', '数量': 2 }
        ]
      }
      this.chartSettings = {
        dimension: '类型',
        metrics: '数量'
      }
    }
  }
</script>