<template>
  <div>
    <span>当前选中了: {{ cityName || '-' }}</span>
    <ve-map :data="chartData" :settings="chartSettings" :events="chartEvents"></ve-map>
  </div>
</template>

<script>
/* eslint-disable */ 
  export default {
    data () {
      this.chartData = {
        columns: ['位置', '浏览量'],
        rows: [
          { '位置': '天津', '浏览量': 123 },
          { '位置': '北京', '浏览量': 223 },
          { '位置': '上海', '浏览量': 93 },
          { '位置': '浙江', '浏览量': 33 }
        ]
      }
      this.chartSettings = {
        position: 'china',
        // selectData: true,
        selectedMode: 'single'
      }
      this.chartEvents = {
        click: (v) => {
          this.cityName = v.name
        }
      }
      return {
        cityName: ''
      }
    }
  }
</script>