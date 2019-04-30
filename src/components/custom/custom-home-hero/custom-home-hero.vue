<template lang='pug' src='./custom-home-hero.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      activeSlide: 0
    }
  },
  mounted () {
    this.setActive()
  },
  methods: {
    setActive () {
      setInterval(() => {
        this.activeSlide > (this.content.length - 2) ? this.activeSlide = 0 : this.activeSlide += 1
      }, 7500)
    },
    setNext () {
      this.activeSlide !== (this.content.length - 1) ? this.activeSlide += 1 : this.activeSlide = 0
    },
    setPrev () {
      this.activeSlide !== 0 ? this.activeSlide -= 1 : this.activeSlide = this.content.length - 1
    }
  }
}
</script>
