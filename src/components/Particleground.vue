<template>
  <div ref="particles" style="width: 100%; height: 100%;">
  </div>
</template>

<script>
/* eslint-disable */
import Particle from 'particleground-light'
export default {
  data () {
    return {
    }
  },
  mounted () {
    new Particle(this.$refs.particles, {
      dotColor: '#E8E8E8',
      lineColor: '#E8E8E8',
      density: 10000,
      proximity: 100
    })
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
