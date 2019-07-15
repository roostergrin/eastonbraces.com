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
