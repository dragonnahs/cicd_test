<template>
  <div @click="close">
    one content
  </div>
</template>
<script>
export default {
  props: {
    one: String
  },
  data() {
    return {

    }
  },
  methods: {
    close(){
      this.$emit('close')
    }
  },
  beforeUpdate(){
    console.log('one-child')
  }
}
</script>