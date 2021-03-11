<style scoped>
@import url("./index.css");
</style>
<template>
  <div class="video_parent">
    <div id="video" style="height: 200px"></div>
  </div>
</template>

<script>
export default {
  name: "video",
  mounted() {
    // setTimeout(() => {
    //   this.init();
    // })
    console.log(window.ckplayer,222)
  },
  data() {
    return {
      player: new Object(),
      videoobj: {
        width: 1015, // 宽度，也可以支持百分比(不过父元素宽度要有)
        height: 574, // 高度，也可以支持百分比
        container: "#video", //“#”代表容器的ID，“.”或“”代表容器的class
        variable: "player", //该属性必需设置，值等于下面的new chplayer()的对象
        autoplay: true, //自动播放
        live: true,
        video: "http://vjs.zencdn.net/v/oceans.mp4" //视频地址(必填)
      }
// {
//         vurl: "http://vjs.zencdn.net/v/oceans.mp4",
//         bg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594966636007&di=ed47d28a65512ac19f89d26cf323aa54&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
//         pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594966636007&di=ed47d28a65512ac19f89d26cf323aa54&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg'
//       }
    }
  },
  methods: {
    init(){
      let player = new window.ckplayer(this.videoObject);
      console.log(player)
    }
  }
}
</script>


