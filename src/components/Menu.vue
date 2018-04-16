<template>
  <header class="site-header">
          <hgroup>
              <h1><a href="blog" title="你好啊，旅行者">疯狂大石头的个人网站</a></h1>
              <h2>Standing on Shoulders of Giants</h2>
          </hgroup>
            <nav role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" data-toggle="collapse"
                                data-target="#example-navbar-collapse">
                            <i class="fa fa-chevron-down"><span></span></i>
                        </button>
                        <a class="navbar-brand" href="#">Menu</a>
                    </div>
                    <div class="collapse navbar-collapse" id="example-navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li><a href="/blog">博客文章</a></li>
                            <li><a href="/blog">干货收藏</a></li>
                            <li><a href="/ws/chat">聊天&留言</a></li>
                            <li><router-link to="/Manager">管理</router-link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
</template>

<script>
import '../assets/jquery.min.js'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/js/bootstrap.min.js'
export default {
  components: {
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
/* Header */
.site-header {
  padding: 24px 0;
  padding: 1.714285714rem 0;
  h1 {
    font-size: 24px;
    font-size: 1.714285714rem;
    line-height: 1.285714286;
    margin-bottom: 14px;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: normal;
    font-size: 13px;
    font-size: 0.928571429rem;
    line-height: 1.846153846;
    color: #757575;
  }
  h1,h2{
    text-align: center;
    a{
      color: #515151;
      display: inline-block;
      text-decoration: none;
      font-size: 24px;
      &:hover{
        color: #21759b;
      }
    }
  }
}
nav {
  margin-top: 20px;
  border-bottom: 1px solid #ededed;
  border-top: 1px solid #ededed;
  display: inline-block !important;
  width: 100%;
  .container-fluid {
    .navbar-header {
      button{
        position:relative;
        float:right;
        height: 50px;
        background-color:transparent;
        background-image:none;
        border:1px solid transparent;
        border-radius:4px;
        &:focus{outline:0;}
        @media (min-width:768px){display:none}
      }
      a {
        color: #757575;
        font-family: "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
      }
    }
    #example-navbar-collapse {
      ul {
        @media (min-width:968px){
            margin-left: 150px;
        }
        @media (min-width:868px)and (max-width:968px){
          margin-left: 100px;
        }
        li {
          a{
            color: #757575;
            &:hover{color: #21759b;}
          }
          font-family: "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
          margin-right: 60px;
        }
      }
    }
  }
}
@media only screen and (max-width: 479px) {
  .site-header {
    padding:24px 0 0;
  }
}
</style>
