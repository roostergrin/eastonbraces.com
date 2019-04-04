<template lang='pug' src='./the-footer.pug'></template>

<script>
export default {
  computed: {
    links () {
      return this.$router.options.routes.filter(link => link.list)
    },
    content () {
      return this.$store.state.app['the-footer']
    }
  },
  mounted () {
    console.log(this.links)
  }
}
</script>
