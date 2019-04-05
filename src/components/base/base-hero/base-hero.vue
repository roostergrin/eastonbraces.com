<template lang='pug' src='./base-hero.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      activeLink: null
    }
  },
  watch: {
    '$route' (data) {
      let anchor = data.hash.replace(/#(\S)/g, '$1')
      this.activeLink = anchor
    }
  },
  mounted () {
    if (this.$route.hash) {
      let anchor = this.$route.hash.replace(/#(\S)/g, '$1')
      this.activeLink = anchor
    } else {
      this.activeLink = this.$route.meta[0].anchor
    }
  },
  methods: {
    changeSection (i) {
      this.$router.push(i.path)
      this.activeLink = i.anchor
    }
  }
}
</script>
