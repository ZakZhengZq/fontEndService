<template>
  <div class="sidebar" aria-hidden="true">
    <div class="func-btns func-btns-up">
      <span class="func-item">
        <i class="icon iconfont icon-shouyeshouye"><span>目录</span></i>
        <div>
          <i class="left-arrow"></i><i class="left-arrow-clone"></i>
          <a href="javascript:void(0);" onclick="return false;">显示目录</a>
        </div>
      </span>
      <span class="func-item">
        <i class="icon iconfont icon-shezhi"><span>设置</span></i>
        <div class="font-choose-box">
          <i class="left-arrow"></i><i class="left-arrow-clone"></i>
          <div class="font-choose bg-choose">
          <a href="javascript:void(0)" onclick="return false;" class="bg-type  font-type-song iconfont icon-baitian"><i class="icon"></i></a>
          <a href="javascript:void(0)" onclick="return false;" class="bg-type  font-type-hei iconfont icon-yewan"><i class="icon"></i></a>
          </div>
          <div class="font-choose">
          <a href="javascript:void(0)" onclick="return false;" class="font-type font-type-song">宋体</a>
          <a href="javascript:void(0)" onclick="return false;" class="font-type font-type-hei">黑体</a>
          </div>
        </div>
      </span>
      <span class="func-item">
        <a href="#" target="_blank"><i class="func-fb icon iconfont icon-fenxiang1"><span>分享</span></i></a>
        <div><i class="left-arrow"></i><i class="left-arrow-clone"></i>
          <p class="seperator sharecanvas" v-on:click="screen"><a>截屏分享</a></p>
          <p><a href="#" target="_blank">微博关注</a></p>
        </div>
      </span>
      <span class="func-item">
        <i class="icon iconfont icon-guanyu"><span>关于</span></i>
        <div>
          <i class="left-arrow"></i><i class="left-arrow-clone"></i>
          <p v-on:click="intro = !intro"><a class="func-about-link" target="_blank">关于作者</a></p>
          <div id="followMeOnWeibo"></div>
        </div>
      </span>
    </div>
    <div class="func-btns func-btns-down">
      <span class="func-item">
          <a href="#" target="_blank"><i class="icon iconfont icon-shiyan"><span>技术</span></i></a>
          <div><i class="left-arrow"></i><i class="left-arrow-clone"></i>
            <p class="seperator"><a href="#" target="_blank">开源项目</a></p>
            <p class="seperator"><a href="#" target="_blank">技术交流</a></p>
            <p><a href="#" target="_blank">论坛</a></p>
          </div>
      </span>
      <span class="func-item">
          <i class="icon iconfont icon-liuyan"><span>留言</span></i>
          <div><i class="left-arrow"></i><i class="left-arrow-clone"></i>
            <p class="seperator"><a href="/ws/chat" target="_blank">给我留言</a></p>
            <p><a href="/ws/chat" target="_blank">近期留言</a></p>
          </div>
      </span>
      <span class="func-item">
          <a href="#" target="_blank"><i class="icon iconfont icon-link"><span>友链</span></i></a>
          <div><i class="left-arrow"></i><i class="left-arrow-clone"></i>
            <a href="#" target="_blank">友情链接</a>
          </div>
      </span>
      <span class="func-item">
          <a href="#" target="_blank"><i class="icon iconfont icon-dingyue"><span>订阅</span></i></a>
          <div><i class="left-arrow"></i><i class="left-arrow-clone"></i><a href="#" target="_blank">订阅我吧！(建设中..)</a></div>
      </span>
    </div>
    <Modal
        v-model="dialog"
        title="截图并分享！"
        @on-ok="ok"
        @on-cancel="cancel">
        <p id="img"></p>
        <div id="share" class="social-share" data-title="来自 疯狂大石头 个人博客的分享" data-source="来自 疯狂大石头 个人博客的分享"></div>
    </Modal>
    <Modal
        v-model="intro"
        title="关于作者"
        @on-ok="ok"
        @on-cancel="cancel">
        <p></p>
    </Modal>
  </div>
</template>

<script>
/* eslint-disable */
import $ from "jquery";
import '../assets/font-awesome/css/font-awesome.min.css'
import '../assets/icon_font/iconfont.css'
import '../../node_modules/social-share.js/dist/js/social-share.min.js'
import '../../node_modules/social-share.js/dist/css/share.min.css'
import html2canvas from 'html2canvas'
export default {
  data() {
    return {
      dialog: false,
      intro: false
    };
  },
  mounted() {
    var left=48;
    $(".sidebar").mouseenter(function() {
        $(this).addClass("sidebar-hover");
    }).mouseleave(function() {
        $(this).removeClass("sidebar-hover");
    });
    $(".func-item").mouseenter(function() {
        $(this).children("div").css({
            "left":left,
            "opacity": "0",
            "display": "block"
        }).clearQueue().show().stop().animate({
            "left":left-15,
            "opacity": "1"
        }, "fast");
    }).mouseleave(function() {
        $(this).children("div").stop().delay().animate({
            "left":left,
            "opacity": "0"
        }, "fast", function() {
            $(this).hide()
        });
    });

    $(".icon-yewan").click(function () {
      document.body.style.background = '#222'
      document.body.style.color = '#ccc'
    });

    $(".icon-baitian").click(function () {
      document.body.style.background = ''
      document.body.style.color = ''
    })

    $(".font-type-song").click(function () {
      document.getElementById('app').style.fontFamily = "宋体"
    })

    $(".font-type-hei").click(function () {
      document.getElementById('app').style.fontFamily = '"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu'
    })
  },
  created() {
  },
  methods: {
    screen () {
      this.dialog = true;
      html2canvas(document.body).then((canvas) => {
        canvas.id = "mycanvas";
        var dataUrl = canvas.toDataURL();
        var newImg = document.createElement("img");
        newImg.src =  dataUrl;
        var share = document.getElementById("share"); 
        share.setAttribute("data-image", dataUrl);
        newImg.style = 'width: 500px; height: 300px;';
        var father = document.getElementById('img');
        while(father.hasChildNodes())
        {  
            father.removeChild(father.firstChild);  
        }
        father.appendChild(newImg);
      });
    },
    ok () {
      this.$Message.info('资源已清理！');
    },
    cancel () {
      this.$Message.info('已取消！');
    }
  }
};
</script>

<style lang="scss" scoped>
.dialogImg {
  width: 300px;
  height: 600px;
}
.song{font-family:"宋体"}
.hei{ font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu }
.sidebar {
  position: fixed;
  _display: none;
  left: -680px;
  width: 706px;
  top: 0;
  bottom: 0;
  -webkit-box-shadow: 10px 0 10px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 10px 0 10px 0 rgba(0, 0, 0, 0.1);
  border-right: 1px solid #ccc;
  transition: all 0.3s;
  *border-right: 1px solid #ccc;
  z-index: 80;
  @media (max-width: 1120px) {
    display: none;
  }
}

:root .sidebar {
  border-right: none; }

.sidebar-toggler {
  position: fixed;
  top: 50%;
  left: 10px;
  height: 84px;
  width: 16px;
  margin-top: -42px;
  background: #e1e8e5;
  color: #000;
  text-align: center;
  line-height: 84px;
  cursor: pointer; }

.sidebar-content {
  padding-bottom: 30px; }

.sidebar-panel {
  overflow: hidden;
  width: 700px;
  margin-bottom: 25px;
  & > div{
    float: left;
    border: 1px solid #ccc;
  }
  a{
    display: block;
    height: 100%;
    font-size: 22px;
    color: #fff;
    text-align: center;
    font-family: "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    &:hover{text-decoration: none; }
  }
}

.sidebar-panel-ad {
  width: 400px;
  height: 150px;
  margin-right: 20px;
  line-height: 150px;
  background-image: url("http://img3.douban.com/img/fmadmin/chlBanner/28472.jpg");
  background-size: cover;
  &:hover{
    opacity: 0.8;
    -moz-opacity: 0.8;
  }
  a{
    color: #555;
    font-size: 40px;
  }
}

.sidebar-panel-archive {
  width: 150px;
  height: 65px;
  line-height: 65px;
  background-color: #d93b57;
  background-image: -webkit-linear-gradient(bottom, rgba(255, 94, 58, 0.8) 0%, rgba(255, 42, 104, 0.8) 100%);
  background-image: linear-gradient(to top, rgba(255, 94, 58, 0.8) 0%, rgba(255, 42, 104, 0.8) 100%);
  &:hover{
    background-color: #d93b57;
    background-image: -webkit-linear-gradient(bottom, rgba(255, 42, 104, 0.8) 0%, rgba(255, 94, 58, 0.8) 100%);
    background-image: linear-gradient(to top, rgba(255, 42, 104, 0.8) 0%, rgba(255, 94, 58, 0.8) 100%);
  }
}

.sidebar-panel-seminar {
  width: 150px;
  height: 65px;
  margin-top: 20px;
  line-height: 65px;
  background-color: #23a2d6;
  background-image: -webkit-linear-gradient(bottom, rgba(29, 98, 240, 0.8) 0%, rgba(26, 214, 253, 0.8) 100%);
  background-image: linear-gradient(to top, rgba(29, 98, 240, 0.8) 0%, rgba(26, 214, 253, 0.8) 100%);
  &:hover{
    background-color: #23a2d6;
    background-image: -webkit-linear-gradient(bottom, rgba(26, 214, 253, 0.8) 0%, rgba(29, 98, 240, 0.8) 100%);
    background-image: linear-gradient(to top, rgba(26, 214, 253, 0.8) 0%, rgba(29, 98, 240, 0.8) 100%);
  }
}

.sidebar-hover {
  transition: all 0.3s;
  left: -648px;
  .func-btns{
    transition: all 0.3s;
    width: 62px;
    i.icon{
      color: #555;
      font-size: 14px;
      white-space: nowrap;
      span{
        display: inline-block;
        font-size: 14px;
        margin-left: 4px;
        color: #868686;
        position: relative;
        top: 1px;
        transition: all 0.3s;
        opacity: 1;
      }
    }
  }
}

  .func-btns-up {
    top: 15px;
    bottom: auto;
  }

  .func-btns-down {
    padding-bottom: 10px;
  }

  .func-btns {
    transition: all 0.3s;
    position: absolute;
    right: 0;
    bottom: 10px;
    width: 26px;
    font-size: 18px;
    text-align: center;
    color: #666;
    i.icon {
      cursor: pointer;
      padding: 6px 0;
      display: block;
      height: 28px;
      line-height: 18px;
      &:hover{
        color: #000;
      }
      span{
        position: absolute;
        opacity: 0;
      }
    }
  }

  .func-item {
    position: relative;
    //display: block;
    //padding-top:10px;
    &>a{
      color: #555;
      &:hover{
        text-decoration: none;
      }
    }
    &>div{
      display: none;
      position: absolute;
      left: 20px;
      top: 10%;
      min-width: 80px;
      margin-top: -12px;
      border: 1px solid #ccc;
      padding: 8px;
      background: #eee;
      font-size: 14px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      a{
        color: #555;
        text-decoration: none;
        &:hover{
          color: #000;
        }
      }
    }
    p {
      line-height: 24px;
      margin: 5px 0;
    }
    p.seperator{
      border-bottom: 1px solid #ccc;
      cursor: pointer;
    }
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) {
    .func-item > div {
      margin-top: -34px; }
  }

  left-arrow {
    position: absolute;
    left: -15px;
    height: 0;
    width: 0;
    line-height: 0;
    border: 8px solid transparent;
    top: 9px;
    z-index: 100;
    border-right-color: #eee;
  }
  .left-arrow-clone {
    position: absolute;
    left: -16px;
    height: 0;
    width: 0;
    z-index: 99;
    line-height: 0;
    border: 8px solid transparent;
    top: 9px;
    border-right-color: #ccc;}

  %in-bl{
    display: inline-block;
    padding: 10px 0;
    width: 87px;
    font-size: 18px;
    text-align: center;
    border: 1px solid #d4d4d4;
  }
  .bg-type {
    @extend %in-bl;
    height: 50px;
    i.icon{
      padding: 0;
    }
  }
  .font-type{
    @extend %in-bl;
  }

  //div.font-choose-box {
  //  margin-top: -30px;
  //}
  .font-choose {
    width: 190px;
  }
  .bg-choose {
    margin-bottom: 4px;
  }

.font-type-song {
  background-color: #f6f6f6;
  background-image: -moz-linear-gradient(top, #f8f8f8, #f3f3f3);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f8f8f8), to(#f3f3f3));
  background-image: -webkit-linear-gradient(top, #f8f8f8, #f3f3f3);
  background-image: -o-linear-gradient(top, #f8f8f8, #f3f3f3);
  background-image: linear-gradient(to bottom, #f8f8f8, #f3f3f3);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF8F8F8', endColorstr='#FFF3F3F3', GradientType=0);;
  border-color: #f3f3f3 #f3f3f3 #cdcdcd;
  border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);;
  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 0 rgba(255,255,255,0.4);
  -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 0 rgba(255,255,255,0.4);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 0 rgba(255,255,255,0.4);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.font-type-hei {
  border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 0 rgba(255,255,255,0.4);
  -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 0 rgba(255,255,255,0.4);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 0 rgba(255,255,255,0.4);
  margin-left: -5px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.yewan {
  background: #222;
  color: #ccc; }
</style>