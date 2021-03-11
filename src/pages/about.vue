<template>
  <div>
    about page
    <v-video></v-video>
    <two />
    <one v-if="showOne" @close='closeOne' />
  </div>
</template>
<script>
import VVideo from '@/components/video/index.vue'
import One from '../components/one'
import Two from '../components/two'
export default {
  components: {
    VVideo,
    One,
    Two
  },
  data(){
    return {
      showOne: true
    }
  },
  beforeUpdate(){
    console.log('about--parent')
  },
  methods: {
    closeOne(){
      this.showOne = false
    }
  }
}
</script>