<template>
  <div>
    <!-- <video-player  class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="customstatechangedeventname"
      @play="onPlayerPlay($event)"
    >
    </video-player> -->
    <h1>{{count}}----{{test}}</h1>
    <button @click="showPop">显示</button>
    <br>
    <div class="pop" v-show="popFlag">
      <h2>这个是弹窗显示</h2>
      <button @click="closePop">知道了</button>
    </div>
    <div class="box">
      <div v-for="item in count" :key="item" >
        添加内容是多少{{item}}
      </div>
    </div>
    <!-- <div>{{count}}</div> -->
  </div>
</template>

<script>
import 'vue-video-player/node_modules/video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
// import {videoPlayer} from 'vue-video-player'

function ajaxFun(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(100000)
    }, 0)
  })
}
export default {
  components: {
    // videoPlayer
  },
  data(){
    return {
      count: 0,
      test: 0,
      popFlag: false,
      player: null,
      playerOptions: {
        muted: true,
        language: 'zh-CN',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        aspectRatio: '16:9',
        sources: [{
          type: "video/mp4",
          src: "http://vjs.zencdn.net/v/oceans.mp4"
        }],
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        },
        poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594966636007&di=ed47d28a65512ac19f89d26cf323aa54&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
      },
    }
  },
  methods:{
    onPlayerPlay(player) {
      console.log('player play!', player)
    },
    async init(){
      let res = await ajaxFun()
      console.log(res)
      this.count += res
    },
    showPop(){
      this.popFlag = true
      this.test += 1
      this.init()
    },
    closePop(){
      this.popFlag = false
      console.log(this.popFlag, '-----')
    },
    
    
  },
  mounted(){
    // this.init()
  }
}
</script>
<style>
.pop{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.9);
  color: #fff;
}
.box{
  height: 100px;
  overflow: scroll;
}
</style>