<template>
    <aside id="aside">
        <div class="widgets-container">
            <div class="widget-warp widget-permes">
                <a href="#" target="_blank">
                    <img src="../assets/photo.png">
                </a>
                <span>疯狂大石头</span>
                <em>"Doubt is the strongest enemy"</em>
            </div>
            <div class="widget-warp" id="widget-latest">
                <h3 class="widget-title">最新文章</h3>
                <div class="widget-latest">
                    <ul id="recent-post">
                        <li v-for="(item, index) in articleList" :key="index">
                          <router-link :to="'/article/' + item.id">
                            <div class="item-thumbnail">
                                <a>
                                    <span v-bind:style="'background-image:url('+item.img+')'" v-bind:alt=item.alt class="thumbnail-image"></span>
                                </a>
                            </div>
                            <div class="item-inner">
                                <p class="item-category"><a class="article-category-link" v-bind:href=item.category_href v-text="item.category"></a></p>
                                <p class="item-title"><a class="title" v-text="item.title"></a></p>
                                <p class="item-author" v-text="item.author"></p>
                                <p class="item-date">at <time datetime="2017-05-18T01:56:11.000Z" itemprop="datePublished" v-text="item.date"></time></p>
                            </div>
                          </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="widget-warp widget-list" id="widget-fenlei">
                <h3 class="widget-title">分类</h3>
                <div class="widget">
                    <ul>
                        <li v-for="(item, index) in fenleiList" :key="index">
                            <a v-text="item.type" v-on:click="artFilter(item.type)">Node.js</a>
                            <span class="category-list-count" v-text="item.num">46</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="widget-warp widget-list" id="widget-guidang">
                <h3 class="widget-title">归档</h3>
                <div class="widget">
                    <ul >
                        <li v-for="(item, index) in guidangList" :key="index">
                            <a v-text="item.mon" v-on:click="artFilter(item.mon)"></a>
                            <span class="category-list-count" v-text="item.num">46</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
import axios from 'axios'
import bus from '../js/eventBus.js'
export default {
  data () {
    return {
      articleList: [],
      fenleiList: [],
      guidangList: []
    }
  },
  created () {
    this.latestArticle()
  },
  methods: {
    latestArticle: function () {
      axios.all([
        axios.get('http://localhost:3000/blog/latest'),
        axios.get('http://localhost:3000/blog/fenlei'),
        axios.get('http://localhost:3000/blog/guidang')
      ]).then(axios.spread((latest, fenlei, guidang) => {
        this.articleList = latest.data
        this.fenleiList = fenlei.data
        this.guidangList = guidang.data
      }))
    },
    artFilter: function (msg) {
      bus.$emit('sendMsgToInhours', msg)
    }
  }
}
</script>

<style lang="scss" scoped>
  #aside{
      width: 264px;
      float: left;
      margin-left: -264px;
      // background-color: rgba(240, 240, 240, 1);
  }
  @media only screen and (min-width: 480px) and (max-width: 959px){
    #aside {
      left: 0;
      margin: 0;
      height: 100%;
      position: absolute;
      overflow: hidden;
      width: 50px !important;
      -webkit-transition: width 0.2s ease-in 0.2s;
      -moz-transition: width 0.2s ease-in 0.2s;
      -ms-transition: width 0.2s ease-in 0.2s;
      transition: width 0.2s ease-in 0.2s;
      &:before,&:after{
        content: "";
        display: table;
      }
      &:after{ clear: both;}
      .widgets-container{display: none}
    }
  }
  @media only screen and (max-width: 479px) {
    #aside{
      margin-left: 0 !important;
      float: none;
      margin: 0px;
      width: 100% !important;
      background: #f0f0f0 !important;
    }
  }
  div.widget-warp{padding: 23.294px 23.294px 13.294px}
  div.widget-permes{
    border-bottom: 1px solid #C7C7C7;
    img{width: 217.412px}
    span{
      margin-top: 20px;
      display: block;
      text-align: center;
      clear: both;}
    em{
      margin-top: 12px;
      display: block;
      text-align: center;
      clear: both;
      font-size: 12px;
      color: #AAAAAA;}
  }
  #widget-latest{border-bottom: 1px solid #C7C7C7;}
  .widget-title{
    font-size: 15px;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 6px;
  }
  .widget-latest{
    line-height: 1em;
    word-wrap: break-word;
    font-size: 0.9em;
    color: #777;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    a{text-decoration: none;}
    ul{
      list-style: none;
      margin: 0;
      padding-left: 0px;
      li{
        padding: 10px 0 10px 94px;
        border-bottom: 1px solid #ddd;
      }
    }
  }
  .item-thumbnail{
  opacity: 1;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
  float: left;
  margin-left: -94px;
  a{
    width: 85px;
    height: 85px;
    display: block;
    position: relative;
    overflow: hidden;
    .thumbnail-image {
      position: absolute;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-size: cover;

    }
    span {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
#recent-post li:before,
#recent-post li:after {
  content: "";
  display: table;
}
#recent-post li:after {
  clear: both;
}

.widget{
  line-height: 1em;
  word-wrap: break-word;
  font-size: 0.9em;
  color: #777;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  a{
    text-decoration: none;
    color: #777;
  }
}
.widget-list{
  ul{
    list-style: none;
    line-height: 1.6em;
    margin: 0;
    padding: 0;
    li{
      padding: 10px 0;
      font-size: 15px;
      border-bottom: 1px solid #e4e4e4;
      a{
        color: #777;
        &:before{color: #ccc;
          content: "\f0da";
          font-size: 12px;
          margin-right: 6px;
          font-family: FontAwesome;
          -webkit-transition: 0.2s ease;
          -moz-transition: 0.2s ease;
          -ms-transition: 0.2s ease;
          transition: 0.2s ease;}
      }
    }
  }
}
.category-list-count{
  &:before{content: "(";}
  &:after{content: ")";}
}
</style>
