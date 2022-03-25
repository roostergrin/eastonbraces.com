<template lang="pug" src="./halvorsen-difference.pug"></template>

<script>
import BlockTabsWheel from 'components/block/block-tabs-wheel/block-tabs-wheel'
import BlockTestimonials from 'components/block/block-testimonials/block-testimonials'
import CustomDifferenceTestimonials from 'components/custom/custom-difference-testimonials/custom-difference-testimonials'

export default {
  name: 'halvorsen-difference',
  computed: {
    props () {
      return this.$store.state.pages['halvorsen-difference']
    }
  },
  components: {
    BlockTabsWheel,
    BlockTestimonials,
    CustomDifferenceTestimonials
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
  }
}
</script>
