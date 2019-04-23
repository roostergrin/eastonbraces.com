<template lang="pug" src="./treatments.pug"></template>

<script>
import BlockGradient from 'components/block/block-gradient/block-gradient'
import CustomTreatmentsBraces from 'components/custom/custom-treatments-braces/custom-treatments-braces'
import CustomTreatmentsColor from 'components/custom/custom-treatments-color/custom-treatments-color'
import CustomTreatmentsEarly from 'components/custom/custom-treatments-early/custom-treatments-early'
import CustomTreatmentsEmergencies from 'components/custom/custom-treatments-emergencies/custom-treatments-emergencies'
import CustomTreatmentsFAQ from 'components/custom/custom-treatments-faq/custom-treatments-faq'

export default {
  name: 'treatments',
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    BlockGradient,
    CustomTreatmentsBraces,
    CustomTreatmentsColor,
    CustomTreatmentsEarly,
    CustomTreatmentsEmergencies,
    CustomTreatmentsFAQ
  }
}
</script>
