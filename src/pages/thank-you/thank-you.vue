<template lang='pug' src='./thank-you.pug'></template>

<script>
export default {
  name: 'thankyou',
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    },
    loading () {
      return this.$store.state.loading
    }
  },
}
</script>