<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
/* eslint-disable */ 
  export default {
    created: function () {
      this.chartData = {
        columns: ['类型', '浏览量', '评论数'],
        rows: [
          { '类型': 'Vue', '浏览量': 15, '评论数': 2 },
          { '类型': '前端杂谈', '浏览量': 22, '评论数': 7 },
          { '类型': 'JavaScript', '浏览量': 12, '评论数': 9 },
          { '类型': 'Docker', '浏览量': 23, '评论数': 1 },
          { '类型': 'HTML', '浏览量': 31, '评论数': 15 },
          { '类型': '工具', '浏览量': 33, '评论数': 20 },
          { '类型': '其他', '浏览量': 19, '评论数': 17 }
        ]
      }
      this.chartSettings =  {
        legendName: {
          '浏览量': '浏览量'
        }
      }
    }
  }
</script>
