<template lang="pug" src="./about-us.pug"></template>

<script>
import CustomAboutDoctor from 'components/custom/custom-about-doctor/custom-about-doctor'

export default {
  name: 'about-us',
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    }
  },
  components: {
    CustomAboutDoctor
  }
}
</script>
