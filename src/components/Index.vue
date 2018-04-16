<template>
  <div style="width: 100%; height: 100%; overflow: scroll;">
    <particleground/>
    <SideBar/>
    <div class="site">
      <Menu/>
      <router-view></router-view>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Particleground from './Particleground'
import SideBar from './SideBar'
import Menu from './Menu'
import Footer from './Footer'
export default {
  components: {
    Particleground,
    SideBar,
    Menu,
    Footer
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
/* Minimum width of 960 pixels. */
@media screen and (min-width: 960px) {
  body {
    .site {
      padding: 0 40px;
      padding: 0 2.857142857rem;
      margin-top: 48px;
      margin-top: 3.428571429rem;
      margin-bottom: 48px;
      margin-bottom: 3.428571429rem;
      box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
    }
  }
}
@media screen and (min-width: 600px) {
  .site {
    margin: 0 auto;
    max-width: 1120px;
    max-width: 80rem;
    overflow: hidden;
  }
}
    /* Page structure */
.site {
  padding: 0 24px;
  padding: 0 1.714285714rem;
  background-color: #fff;
}
</style>
