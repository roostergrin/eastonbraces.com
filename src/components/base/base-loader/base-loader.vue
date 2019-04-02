<template lang='pug' src='./base-loader.pug'></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      loaded: false,
      animate: false
    }
  },
  created () {
    document.body.classList.add('body-stop')
  },
  mounted () {
    let isLoading = setInterval(() => {
      if (!this.$store.state.loading) {
        setTimeout(() => {
          this.animate = true
        }, 500)
        setTimeout(() => {
          this.loaded = true
          document.body.classList.remove('body-stop')
        }, 1750)
        clearInterval(isLoading)
      }
    }, 100)
  }
}
</script>
