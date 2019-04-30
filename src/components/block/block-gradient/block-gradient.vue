<template lang='pug' src='./block-gradient.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>
