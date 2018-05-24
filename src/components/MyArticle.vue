<template>
  <section style="overflow: hidden;">
      <div class="articles-years">
        <a href="/archives/2017" class="archive-year" v-text="date"><i class="icon fa fa-calendar-o"></i>2017</a>
      </div>
      <div class="articles" v-for="(item2,index) in item" :key="index" v-if="filterKey ? filterKey === item2.type : true">
        <div class="article-row">
            <article class="article article-summary">
              <router-link :to="'/article/' + item2.id">
                <div class="article-summary-inner">
                    <a  :href="item2.url" class="_thumbnail">
                        <span :style="'background-image:url('+item2.img+')'" class="thumbnail-image"></span>
                    </a>
                    <div class="article-meta">
                        <p class="category"><a class="article-category-link" href="/categories/无线开发/" v-text="item2.type"></a></p>
                        <p class="date"><time :datetime="item2.date" itemprop="datePublished">2017-02-10</time></p>
                    </div>
                    <h2 class="article-title">
                        <a class="title" v-text="item2.title"></a>
                    </h2>
                    <p class="article-excerpt" v-text="item2.abstract"></p>
                </div>
              </router-link>
            </article>
        </div>
    </div>
  </section>
</template>

<script>
import bus from '../js/eventBus.js'
export default {
  props: ['item', 'date'],
  data () {
    return {
      isFilter: false,
      filterKey: ''
    }
  },
  methods: {
  },
  created () {
    bus.$on('sendMsgToInhours', (msg) => {
      if (msg.indexOf('-') < 0) {
        if (!this.isFilter) {
          this.filterKey = msg
          this.isFilter = true
        } else {
          this.filterKey = ''
          this.isFilter = false
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.articles-years{
  padding: 18px 30px 17px;
  font-size: 16px;
  color: #666;
  border-bottom: 1px solid #eee;
}
.articles{
  -webkit-column-gap: 10px;
  -moz-column-gap: 10px;
  column-gap: 10px;
  overflow: hidden;
  width: 50%;
  display: inline-table;
  float: left;
  @media only screen and (max-width: 479px) {
    display: contents;
  }
}

.article-row {
  width: 100%;
  float: left;
  position: relative;
  padding: 30px 0px 0px 30px;
  border-bottom: 1px solid #eee;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.article-summary {
  width: 100%;
  float: left;
  margin-bottom: 30px;
  a {
    text-decoration: none;
    color: #62bbc3;
  }
  .article-summary-inner {
    margin-right: 25px;
    // padding: 20px 10px 10px 10px;
    // box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.1);
    // border-radius: 5px;
    ._thumbnail {
      height: 0;
      width: 100%;
      display: block;
      overflow: hidden;
      position: relative;
      margin-bottom: 1em;
      padding-bottom: 55.71%;
    }
    .article-title {
      margin-bottom: 10px;
      font-size: 22px;
      font-weight: 400;
      line-height: 1.5em;
      word-wrap: break-word;
      overflow: hidden;
      height: 33px;
      a {
        -webkit-transition: color 0.3s ease-in;
        -moz-transition: color 0.3s ease-in;
        -ms-transition: color 0.3s ease-in;
        transition: color 0.3s ease-in;
        color: #444;
      }
    }
    .article-excerpt {
      position: relative;
      color: #aaa;
      font-size: 16px;
      line-height: 1.6em;
      overflow: hidden;
      height: 6.4em;
      padding: 0 5px;
    }
  }
}
.article-summary-inner:hover {
    // box-shadow: 2px 8px 16px 2px rgba(0,0,0,0.2);
    // transition: box-shadow .3s;
    // -webkit-transition: box-shadow .3s;
    cursor: pointer;
    .thumbnail-image {
      opacity: 0.7;
      -webkit-transition: opacity 0.3s ease-in;
      -moz-transition: opacity 0.3s ease-in;
      -ms-transition: opacity 0.3s ease-in;
      transition: opacity 0.3s ease-in;
    }
    .article-title {
      color: red;
      -webkit-transition: color 0.2s;
      -moz-transition: color 0.2s;
      -ms-transition: color 0.2s;
      transition: color 0.2s;
    }
}
.article-meta {
  height: 1.6em;
  line-height: 1.6em;
  overflow: hidden;
  a {
    text-decoration: none;
    color: #62bbc3;
  }
  &:before,&:after{
    content:"";
    display: table;
  }
  &:after {
    clear: both;
  }
  p {
    float: left;
    color: #bbb;
    margin-right: 6px;
  }
}
.article-title {
  text-decoration: none;
  font-size: 30px;
  letter-spacing: -1px;
  color: #555;
  line-height: 1.3em;
  -webkit-transition: color 0.2s;
  -moz-transition: color 0.2s;
  -ms-transition: color 0.2s;
  transition: color 0.2s;
  margin-bottom: 10px;
}
.thumbnail-image {
  border-radius: 5px;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-position: center;
  -webkit-transition: opacity 0.3s ease-in;
  -moz-transition: opacity 0.3s ease-in;
  -ms-transition: opacity 0.3s ease-in;
  transition: opacity 0.3s ease-in;
}
@media only screen and (max-width: 479px) {
  .article-row {
    padding: 0 10px 0 10px;
    border: none;
  }
  .article-summary {
    width: 100%;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    padding: 0 3%;
    border: 1px solid #eee;
    margin-top: 10px;
    margin-bottom: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  .site-header {
    padding:24px 0 0;
  }
  .article-summary-inner{
    margin-right: 0px !important;
    padding: 10px 15px 10px;
  }
}
</style>
