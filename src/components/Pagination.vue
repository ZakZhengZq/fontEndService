<template>
      <nav id="pagination">
        <ul class="_pagination">
            <li v-if="left" v-on:click="previous"><a href="#">«</a></li>
            <li><a id="1" name="pana" class="" v-on:click="select">1</a></li>
            <li v-if="ellipsis1"><span>...</span></li>
            <li v-for="(item, index) in staticNum" :key="index" v-if="item.display"><a v-bind:id="item.id" name="pana" class="" v-on:click="select" v-text="item.val">1</a></li>
            <li v-if="ellipsis2"><span>...</span></li>
            <li v-if="lastNum"><a v-bind:id="7" name="pana" class="" v-on:click="select" v-text="pageNum">1</a></li>
            <li v-if="right" v-on:click="theNext"><a href="#">»</a></li>
        </ul>
    </nav>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  data () {
    return {
         staticNum:[{id:2,display:false,val:2},{id:3,display:false,val:3},{id:4,display:false,val:4}
            ,{id:5,display:false,val:5},{id:6,display:false,val:6}],
        pageNum:15,
        ellipsis1:false,
        ellipsis2:false,
        left:false,
        right:false,
        lastNum:false,
        preSec:1
    }
  },
mounted:function () {
    this.GETPAGES();
},
methods: {
    select: function (event) {
        this.preSec = parseInt(event.target.id);
        let arr = document.getElementsByName('pana');
        for (let i in arr) {
            if (!arr.hasOwnProperty(i)) {
                continue
            }
            arr[i].className = '';
        }
        //document.getElementById(event.target.id).className='_active';
        //console.log(document.getElementById(event.target.id).firstChild.nodeValue);
        if (this.pageNum < 5) {
            document.getElementById(event.target.id).className = '_active';
        }
        if (this.pageNum >= 5) {
            let seleVal = parseInt(document.getElementById(event.target.id).firstChild.nodeValue);
            if ((seleVal - 1) >= 4 && (this.pageNum - seleVal) >= 4) {
                this.ellipsis1 = true;
                this.ellipsis2 = true;
                document.getElementById('4').className = '_active';
                for (let i = 0, j = -2; i < 5; i++, j++)
                    this.staticNum[i].val = seleVal + j;
            }
            if ((seleVal - 1) < 4 && (this.pageNum - seleVal) >= 4) {
                document.getElementById(event.target.id).className = '_active';
                this.disappear();
                for (let i = 2, j = 2; i <= parseInt(event.target.id) + 2; i++, j++) {
                    this.staticNum[i - 2].val = j;
                    this.staticNum[i - 2].display = true;
                }
                this.ellipsis1 = false;
                this.ellipsis2 = true;
            }
            if ((seleVal - 1) >= 4 && (this.pageNum - seleVal) < 4) {
                document.getElementById(event.target.id).className = '_active';
                this.disappear();
                for (let i = 6, j = this.pageNum - 1; i >= parseInt(event.target.id) - 2; i--, j--) {
                    this.staticNum[i - 2].val = j;
                    this.staticNum[i - 2].display = true;
                }
                this.ellipsis1 = true;
                this.ellipsis2 = false;
            }
            if (this.pageNum == 5) {
                document.getElementById(event.target.id).className = '_active';
                if (seleVal == 2 || seleVal == 3 || seleVal == 4) {
                    for (let i = 2; i < 5; i++) {
                        this.staticNum[i - 2].val = i;
                        this.staticNum[i - 2].display = true;
                    }
                    this.ellipsis1 = false;
                    this.ellipsis2 = false;
                }
            }
            if (this.pageNum == 6) {
                document.getElementById(event.target.id).className = '_active';
                if (seleVal == 3 || seleVal == 4) {
                    for (let i = 2; i < 6; i++) {
                        this.staticNum[i - 2].val = i;
                        this.staticNum[i - 2].display = true;
                    }
                    this.ellipsis1 = false;
                    this.ellipsis2 = false;
                }
            }
            if (this.pageNum == 7) {
                document.getElementById(event.target.id).className = '_active';
                if (seleVal == 4) {
                    for (let i = 2; i < 7; i++) {
                        this.staticNum[i - 2].val = i;
                        this.staticNum[i - 2].display = true;
                    }
                    this.ellipsis1 = false;
                    this.ellipsis2 = false;
                }
            }
        }
        this.GETARTSBYINDEX((parseInt(document.getElementById(event.target.id).innerText)-1)*8);
    },
    disappear: function () {
        for (let i = 0; i < 5; i++) {
            this.staticNum[i].display = false;
        }
    },
    previous: function () {
        if (this.preSec - 1 > 0)
            document.getElementById(this.preSec - 1 + '').click()
    },
    theNext: function () {
        if (this.preSec + 1 <= 7)
            document.getElementById(this.preSec + 1 + '').click()
    },
    GETPAGES: function () {
        axios.get('http://localhost:3000/blog/index')
            .then((response) => {
                this.pageNum = parseInt(response.data);
                this.initpaga()
                document.getElementById("1").className = '_active';
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    initpaga: function () {
        if (this.pageNum <= 4) {
            if (this.pageNum == 2) {
                this.lastNum = true
            }
            if (this.pageNum == 3) {
                this.lastNum = true;
                this.staticNum[0].display = true;
            }
            if (this.pageNum == 4) {
                this.lastNum = true;
                this.staticNum[0].display = true;
                this.staticNum[1].display = true;
            }
        }
        if (this.pageNum > 4) {
            this.left = true;
            this.right = true;
            this.lastNum = true;
            this.ellipsis2 = true;
            this.staticNum[0].display = true;
            this.staticNum[1].display = true;
        }
    },
    GETARTSBYINDEX:function (x) {
        axios.post('http://localhost:3000/blog/arts', {index:x})
            .then( (response)=> {
                this.$emit('getArticles', response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}// methods end
}
</script>

<style lang="scss" scoped>
#pagination{
  margin-top: 20px;
  width: 100%;
  border-bottom: 1px solid #ededed;
  text-align:center
}

ul._pagination {
  display: inline-block;
  padding: 0;
  margin: 0 auto;
  li {
    display: inline;
    a {
      color: black;
      float: left;
      padding: 8px 16px;
      text-decoration: none;
      border-radius: 5px;
      &._active{
        background-color: #4CAF50;
        color: white;
        border-radius: 5px;
      }
      &:hover {
        &:not(._active) {
          background-color: #ddd;
        }
      }
    }
    span{
      color: black;
      float: left;
      padding: 8px 5px;
    }
  }
}
</style>
