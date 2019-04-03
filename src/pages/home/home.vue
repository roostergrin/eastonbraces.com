<template lang="pug" src="./home.pug"></template>

<script>
import BlockFacebook from 'components/block/block-facebook/block-facebook'
import CustomHomeHeading from 'components/custom/custom-home-heading/custom-home-heading'
import CustomHomeHero from 'components/custom/custom-home-hero/custom-home-hero'
import CustomHomeTabs from 'components/custom/custom-home-tabs/custom-home-tabs'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    BlockFacebook,
    CustomHomeHeading,
    CustomHomeHero,
    CustomHomeTabs
  }
}
</script>
