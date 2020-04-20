<template lang="pug" src="./home.pug"></template>

<script>
import BlockFacebook from 'components/block/block-facebook/block-facebook'
import BlockTestimonials from 'components/block/block-testimonials/block-testimonials'
import CustomHomeHeading from 'components/custom/custom-home-heading/custom-home-heading'
import CustomHomeHero from 'components/custom/custom-home-hero/custom-home-hero'
import CustomHomeRetainer from 'components/custom/custom-home-retainer/custom-home-retainer'
import CustomHomeTabs from 'components/custom/custom-home-tabs/custom-home-tabs'
import CustomHomeBanner from 'components/custom/custom-home-banner/custom-home-banner'

export default {
  name: 'Home',
  computed: {
    props () {
      console.log(this.$store.state.pages.home)
      return this.$store.state.pages.home
    }
  },
  components: {
    BlockFacebook,
    BlockTestimonials,
    CustomHomeHeading,
    CustomHomeHero,
    CustomHomeRetainer,
    CustomHomeTabs,
    CustomHomeBanner
  }
}
</script>
