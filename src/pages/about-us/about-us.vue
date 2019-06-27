<template lang="pug" src="./about-us.pug"></template>

<script>
import BlockFacebook from 'components/block/block-facebook/block-facebook'
import BlockHeading from 'components/block/block-heading/block-heading'
import CustomAboutCommunity from 'components/custom/custom-about-community/custom-about-community'
import CustomAboutDoctor from 'components/custom/custom-about-doctor/custom-about-doctor'
import CustomAboutLives from 'components/custom/custom-about-lives/custom-about-lives'
import CustomAboutMap from 'components/custom/custom-about-map/custom-about-map'
import CustomAboutMeet from 'components/custom/custom-about-meet/custom-about-meet'
import CustomAboutSponsorship from 'components/custom/custom-about-sponsorship/custom-about-sponsorship'
import CustomAboutTeam from 'components/custom/custom-about-team/custom-about-team'

export default {
  name: 'about-us',
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    }
  },
  components: {
    BlockFacebook,
    BlockHeading,
    CustomAboutCommunity,
    CustomAboutDoctor,
    CustomAboutLives,
    CustomAboutMap,
    CustomAboutMeet,
    CustomAboutSponsorship,
    CustomAboutTeam
  }
}
</script>
