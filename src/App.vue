<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  
  data(){
    return {
    }
  },
  mounted(){
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
html,body{
  margin: 0;
  padding: 0;
}
.video-js{
  width: 100% !important;
  height: 100px !important;
}
.vjs-big-play-button{
  /* width: 20px !important;
  height: 10px !important; */
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%);
  font-size: 10px !important;
}
</style>
