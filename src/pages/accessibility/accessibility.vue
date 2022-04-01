<template lang="pug" src="./accessibility.pug"></template>

<script>

export default {
  name: 'Accessibility',
  computed: {
    props () {
      return this.$store.state.pages['new-patients']
    }
  },
  components: {
  },
  data () {
    return {
      activeLink: null,
      companyName: 'Halvorsen Orthodontics', // Fill this in
      domain: "<a href='https://eastonbraces.com'>eastonbraces.com</a>", // Fill this in
      email: "<a href='mailto:info@eastonbraces.com'>info@eastonbraces.com</a>", // Fill this in
      phone: "<a href='tel:+15082380126'>508.238.0126</a>", // Fill this in
      formattedEmail: ''
    }
  },
  watch: {
    '$route' (data) {
      let anchor = data.hash.replace(/#(\S)/g, '$1')
      this.activeLink = anchor
    }
  },
  mounted () {
    this.formatEmail()
  },
  methods: {
    formatEmail () {
      this.formattedEmail = '<a aria-label="email ' + this.email + '" href="mailto:' + this.email + '">' + this.email + '</a>'
    }
  }
}
</script>
