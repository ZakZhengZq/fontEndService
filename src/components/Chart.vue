<template>
<div class="chat-container">
    <div class="row">
        <div class="col-md-12 ">
            <h4 class="bottom-line">在线聊天室，说点什么吧 :)</h4>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title"><span class="fa fa-comments-o" style="font-size: 20px"></span> 聊天室</h3>
                </div>
                <div class="panel-body">
                    <div style="height:400px; overflow-x:hidden; overflow-y:scroll;">
                        <div id="message-list">
                            <div style="margin-bottom:25px;" v-for="(msg, index) in messages" :key="index">
                                <div v-if="msg.type === 'join' || msg.type === 'left'">
                                    <div class="media-left">
                                        <img class="media-object" style="width:20px; height:20px;" v-bind:src="msg.user.image">
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading" v-text="msg.data"></h4>
                                    </div>
                                </div>
                                <div v-if="msg.type === 'chat'">
                                    <div class="media">
                                        <div class="media-left">
                                            <img class="media-object" style="width:48px; height:48px;" v-bind:src="msg.user.image">
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading" v-text="msg.user.name"></h4>
                                            <span v-text="msg.data"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form id="form-chat" action="#0">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="这都是谁？？" v-model="msg">
                                <span class="input-group-btn"><button class="btn btn-default" v-on:click="submitButton"><i class="fa fa-paper-plane-o"></i></button></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title"><span class="fa fa-user-o"></span> 在线列表</h3>
                </div>
                <div class="panel-body">
                    <div style="height:434px; overflow-x:hidden; overflow-y:scroll;">
                        <div id="user-list">
                            <div class="media" v-for="(user, index) in users" :key="index">
                                <div class="media-left">
                                    <img class="media-object" style="width:20px; height:20px;" v-bind:src="user.image">
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading" v-text="user.name + ' (' + user.id + ')'"></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <vue-disqus shortname="hunters-blog" :identifier="dq_id" :url="dq_url" title="聊天频道"></vue-disqus>
</div>
</template>

<script>
/* eslint-disable */
import VueDisqus from './VueDisqus.vue'
import $ from 'jquery'
export default {
  components: {
    VueDisqus
  },
  data () {
    return {
      dq_id: this.$route.path,
      dq_url: location.href,
      id: '',
      img: '',
      name: '',
      messages: [],
      users: [],
      msg: '',
      ws: {}
    }
  },
  created () {
    let names = ['高富帅','白富美','女汉子','单身狗','斯巴达','王的女人','地表最强','学霸','渣渣','屌丝'];
    let num = Math.floor(Math.random()*10+1)
    let name = names[num];
    let user = {
        id: num,
        name,
        image: `http://localhost:3000/static/images/${num}.png`
    }  
    let token = Buffer.from(JSON.stringify(user)).toString('base64');
    let ws = new WebSocket(`ws://localhost:3000/ws/chat?token=${token}`);
    this.ws = ws;
    ws.onmessage = (event) => {
        let data = event.data;
        let msg = JSON.parse(data);
        if (this.id==''||this.img==''|| this.name==''){
            this.id=msg["user"].id;
            this.img=msg["user"].image;
            this.name=msg["user"].name;
        }
        if (msg.type === 'list') {
            this.users = msg.data;
        } else if (msg.type === 'join') {
            this.addToUserList(msg.user);
            this.addMessage(this.messages, msg);
        } else if (msg.type === 'left') {
            this.removeFromUserList(this.users, msg.user);
            this.addMessage(this.messages, msg);
        } else if (msg.type === 'chat') {
            this.addMessage(this.messages, msg);
        }
    };
    ws.onclose = function (evt) {
        console.log('[closed] ' + evt.code);
        var input = $('#form-chat').find('input[type=text]');
        input.attr('placeholder', 'WebSocket disconnected.');
        input.attr('disabled', 'disabled');
        $('#form-chat').find('button').attr('disabled', 'disabled');
    };
    ws.onerror = function (code, msg) {
        console.log('[ERROR] ' + code + ': ' + msg);
    };
  },
  methods: {
    addToUserList: function (user) {
        var i;
        for (i=0; i<this.users.length; i++) {
            if (this.users[i].id !== user.id) {
                this.users.push(user);
            }
        }
    },
    removeFromUserList: function (list, user) {
        var i, target = -1;
        for (i=0; i<list.length; i++) {
            if (list[i].id === user.id) {
                target = i;
                break;
            }
        }
        if (target >= 0) {
            list.splice(target, 1);
        }
    },
    addMessage: function (list, msg) {
        list.push(msg);
        $('#message-list').parent().animate({
            scrollTop: $('#message-list').height()
        }, 1000);
    },
    submitButton: function (e) {
        e.preventDefault();
        var text = this.msg.trim();
        console.log('[chat] ' + text);
        if (text) {
            this.msg = '';
            this.ws.send(text);
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-container{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.bottom-line{border-bottom: 1px solid #C7C7C7; padding-bottom: 15px; }

#leave{
  .leave-body{
    width: 100%;
    padding:10px 0px 30px 56px;
    border-bottom: 1px dashed #C7C7C7;
    &:before,&:after{
      content:"";
      display: table;
    }
    &:after {
      clear: both;
    }
  }
  .leave-img{
    margin-left: -56px;
    width: 56px;
    height: 56px;
    border-radius: 56px;
    overflow: hidden;
    float: left;
  }
  .leave-inner{
    .title{
      height: 24px;
      line-height: 16px;
      .name{
        display: inline-block;
        padding: 5px 7px 0 7px;
      }
      .time{
        float: right;
        padding: 5px 0 0;
        color: silver;
      }
    }
    .inner{
      padding: 12px 7px 0 7px;
      line-height: 22px;
      font-size: 16px;
    }
  }

  input{
    margin-top: 20px;
    width: 100%;
    height: 220px;
  }
}

 #editor {
   resize:vertical;
   overflow:auto;
   border:1px solid silver;
   width: 100%;
   height: 200px;
   min-height: 200px;
   padding:1em;
 }

 .span12{
   padding:15px;
   text-align: center;
 }
</style>
