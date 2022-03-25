<template lang='pug' src='./block-tabs-wheel.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      activeAccord: null
    }
  },
  methods: {
    setActive (i) {
      this.activeAccord === i ? this.activeAccord = null : this.activeAccord = i
    }
  }
}
</script>
