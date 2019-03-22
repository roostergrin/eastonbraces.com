<template lang="pug" src="./halvorsen-difference.pug"></template>

<script>
export default {
  name: 'halvorsen-difference',
  computed: {
    props () {
      return this.$store.state.pages['halvorsen-difference']
    }
  }
}
</script>
