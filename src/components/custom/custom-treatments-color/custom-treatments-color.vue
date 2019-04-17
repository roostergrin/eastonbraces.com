<template lang='pug' src='./custom-treatments-color.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      activeColor: null,
      band: []
    }
  },
  mounted () {
    this.content.colors.forEach((item) => {
      this.band.push('#000')
    })
  },
  methods: {
    setActiveColor (color, index) {
      this.activeColor = color
    },
    setBandColor (i) {
      this.$set(this.band, i, this.activeColor)
    }
  }
}
</script>
