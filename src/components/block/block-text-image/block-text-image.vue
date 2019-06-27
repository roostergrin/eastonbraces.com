<template lang='pug' src='./block-text-image.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      activeImage: 0
    }
  },
  mounted () {
    setInterval(() => {
      this.activeImage === this.content.slider.length - 1 ? this.activeImage = 0 : this.activeImage++
    }, 4000)
  }
}
</script>
