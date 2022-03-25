<template lang="pug" src="./new-patients.pug"></template>

<script>
import BlockTabsWheel from 'components/block/block-tabs-wheel/block-tabs-wheel'
import BlockTextImage from 'components/block/block-text-image/block-text-image'
import CustomNewContact from 'components/custom/custom-new-contact/custom-new-contact'
import CustomNewFree from 'components/custom/custom-new-free/custom-new-free'
import CustomTreatmentsEarly from 'components/custom/custom-treatments-early/custom-treatments-early'

export default {
  name: 'new-patients',
  computed: {
    props () {
      return this.$store.state.pages['new-patients']
    }
  },
  components: {
    BlockTabsWheel,
    BlockTextImage,
    CustomNewContact,
    CustomNewFree,
    CustomTreatmentsEarly
  }
}
</script>
