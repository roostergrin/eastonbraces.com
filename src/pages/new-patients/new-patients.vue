<template lang="pug" src="./new-patients.pug"></template>

<script>
import BlockTabsWheel from 'components/block/block-tabs-wheel/block-tabs-wheel'
import BlockTextImage from 'components/block/block-text-image/block-text-image'

export default {
  name: 'new-patients',
  computed: {
    props () {
      return this.$store.state.pages['new-patients']
    }
  },
  components: {
    BlockTabsWheel,
    BlockTextImage
  }
}
</script>
