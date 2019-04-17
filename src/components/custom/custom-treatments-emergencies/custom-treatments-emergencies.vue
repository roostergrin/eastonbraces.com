<template lang='pug' src='./custom-treatments-emergencies.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      activeAccord: 0
    }
  },
  methods: {
    setActive (i) {
      this.activeAccord = i
    }
  }
}
</script>
