<template>
  <div rel="blog_base_inner">
    <div>
      <section>
        <router-view></router-view>
      </section>
      <inner-menu/>
    </div>
  </div>
</template>

<script>
import InnerMenu from './InnerMenu'
export default {
  data () {
    return {
    }
  },
  components: {
    InnerMenu
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
div[rel="blog_base_inner"]{
  width: 100%;
  padding-left:  264px;
  overflow-x: hidden;
  background: url("../assets/s-left.png") repeat-y left 0;
  &:before,&:after{
    content: "";
    display: table;
  }
  &:after{ clear: both;}
  div{
    &:before,&:after{
      content: "";
      display: table;
    }
    &:after{ clear: both;}
    section{
      background-color: #fff;
      float: right;
      width: 100%;
      height: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      min-height: 1700px;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 959px){
    padding-left: 50px;
    background-position: -290px 0 !important;
  }
  @media only screen and (max-width: 479px) {
    padding: 0px;
    background: none;
    section{
      float: none;
    }
  }
}
</style>
