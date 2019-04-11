<template lang="pug" src="./treatments.pug"></template>

<script>
import BlockGradient from 'components/block/block-gradient/block-gradient'

export default {
  name: 'treatments',
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    BlockGradient
  }
}
</script>
