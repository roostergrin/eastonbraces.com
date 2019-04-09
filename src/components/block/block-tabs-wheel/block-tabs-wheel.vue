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
      activeTab: 0
    }
  },
  methods: {
    setActive (i) {
      this.activeTab = i
    }
  }
}
</script>
