<template lang='pug' src='./custom-about-community.pug'></template>

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
    this.slideAutomate()
  },
  methods: {
    slideAutomate () {
      setInterval(() => {
        this.activeSlide >= (this.content.slides.length - 1) ? this.activeSlide = 0 : this.activeSlide += 1
      }, 7500)
    },
    slideNext () {
      this.activeSlide >= (this.content.slides.length - 1) ? this.activeSlide = 0 : this.activeSlide += 1
    },
    slidePrev () {
      this.activeSlide <= 0 ? this.activeSlide = (this.content.slides.length - 1) : this.activeSlide -= 1
    }
  }
}
</script>
