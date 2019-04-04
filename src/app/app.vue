<template lang="pug" src="./app.pug"></template>

<script>
import NavigationDesktop from 'components/the-navigation/navigation-desktop/navigation-desktop'
import TheFooter from 'components/the-footer/the-footer'

export default {
  async created () {
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('GET_APP')
    this.$store.dispatch('VIEW_NAV', false)
    this.$store.dispatch('VIEW_BODY', false)
    this.$store.dispatch('VIEW_TYPES', 0)
    this.$store.dispatch('VIEW_SHOWMODAL', false)
    this.$store.dispatch('VIEW_MODALCONTENT', false)
  },
  components: {
    NavigationDesktop,
    TheFooter
  }
}
</script>

<style src='../main.sass' lang='sass'></style>
