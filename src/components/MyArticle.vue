<template>
  <section>
      <div class="articles-years">
        <a href="/archives/2017" class="archive-year" v-text="item.date"><i class="icon fa fa-calendar-o"></i>2017</a>
      </div>
      <div class="articles" v-for="(item2,index) in item.test" :key="index">
        <div class="article-row">
            <article class="article article-summary">
                <div class="article-summary-inner">
                    <a href="/blog/2017/02/10/why-rax/" class="_thumbnail">
                        <span style="background-image:url(//img.alicdn.com/tps/TB1LxebPVXXXXaHXpXXXXXXXXXX-900-500.png)" alt="Why Rax?" class="thumbnail-image"></span>
                    </a>
                    <div class="article-meta">
                        <p class="category"><a class="article-category-link" href="/categories/无线开发/" v-text="item2.article1.name"></a></p>
                        <p class="date"><time datetime="2017-02-10T10:17:45.000Z" itemprop="datePublished">2017-02-10</time></p>
                    </div>
                    <h2 class="article-title">
                        <a href="/blog/2017/02/10/why-rax/" class="title">Why Rax?</a>
                    </h2>
                    <p class="article-excerpt">https://github.com/alibaba/rax 从今年 1 月 12 日在 Weex Conf 上宣布 Rax 开源，至今已过去一个月左右的时间，这段时间里，Rax 拿到 2400+ 的 star, 我们深知这对一个开源产品来说是微不足道的，但是从中可以发现的是「前端或者 Weex 社区对于类 React 的技术方案是有很大需求的」。同时，结合近期 GitHub 上的相关 is</p>
                </div>
            </article>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
    }
  },
  watch: {
    item: function (val) {
      console.log('val  ', val)
    }
  },
  created () {
  },
  methods: {
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
  width: 50%;
  float: left;
  margin-bottom: 30px;
  a {
    text-decoration: none;
    color: #62bbc3;
  }
  .article-summary-inner {
    margin-right: 25px;
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
    }
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
</style>
