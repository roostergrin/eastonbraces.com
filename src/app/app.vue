<template lang="pug" src="./app.pug"></template>

<script>
import NavigationDesktop from 'components/the-navigation/navigation-desktop/navigation-desktop'
import NavigationMobile from 'components/the-navigation/navigation-mobile/navigation-mobile'
import TheFooter from 'components/the-footer/the-footer'
import BaseBaseAccess from 'components/base-access/index'

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
    NavigationMobile,
    TheFooter,
    BaseBaseAccess
  },
  computed: {
    contentnav () {
      return this.$store.state.app.navigation
    }
  }
}
</script>

<style src='../main.sass' lang='sass'></style>
