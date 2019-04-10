<template lang="pug" src="./halvorsen-difference.pug"></template>

<script>
import BlockTabsWheel from 'components/block/block-tabs-wheel/block-tabs-wheel'
import BlockTestimonials from 'components/block/block-testimonials/block-testimonials'

export default {
  name: 'halvorsen-difference',
  computed: {
    props () {
      return this.$store.state.pages['halvorsen-difference']
    }
  },
  components: {
    BlockTabsWheel,
    BlockTestimonials
  }
}
</script>
