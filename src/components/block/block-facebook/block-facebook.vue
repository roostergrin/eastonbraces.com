<template lang='pug' src='./block-facebook.pug'></template>

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
    this.switchImage()
  },
  methods: {
    switchImage () {
      if (this.content.images.length > 1) {
        setInterval(() => {
          this.activeImage < (this.content.images.length - 1) ? this.activeImage += 1 : this.activeImage = 0
        }, 5000)
      }
    }
  }
}
</script>
