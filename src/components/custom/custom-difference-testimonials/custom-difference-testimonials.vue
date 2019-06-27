<template lang='pug' src='./custom-difference-testimonials.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      showing: 0
    }
  },
  computed: {
    slideList () {
      return this.content.slides
    }
  },
  mounted () {
    this.slideChange()
  },
  methods: {
    slideChange () {
      setInterval(() => {
        this.showing === this.slideList.length - 1 ? this.showing = 0 : this.showing++
      }, 7500)
    },
    slideNext () {
      this.showing >= (this.slideList.length - 1) ? this.showing = 0 : this.showing += 1
    },
    slidePrev () {
      this.showing <= 0 ? this.showing = (this.slideList.length - 1) : this.showing -= 1
    }
  }
}
</script>
