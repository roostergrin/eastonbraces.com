<template lang='pug' src='./navigation-mobile.pug'></template>

<script>
import CustomHomeBanner from 'components/custom/custom-home-banner/custom-home-banner'

export default {
  computed: {
    content () {
      return this.$store.state.app.navigation
    },
    links () {
      return this.$router.options.routes.filter(item => item.navigation)
    },
    navScrolled () {
      return this.offsetTop >= (window.innerHeight * 0.45)
    },
    props () {
      return this.$store.state.pages.home
    }
  },
  data () {
    return {
      loaded: false,
      menuOpen: false,
      offsetTop: null,
      subActive: null
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      this.offsetTop = window.pageYOffset
    })
    this.isLoaded(this.content)
  },
  watch: {
    'content' (data) {
      this.isLoaded(data)
    }
  },
  methods: {
    isLoaded (data) {
      if (typeof data !== 'undefined') {
        this.loaded = true
      }
    },
    toggleMenu () {
      if (this.menuOpen) {
        this.menuOpen = false
        this.closeSubMenu()
      } else {
        this.menuOpen = true
      }
      this.toggleScreenStop()
    },
    openSubMenu (i) {
      this.subActive === i ? this.subActive = null : this.subActive = i
    },
    closeSubMenu () {
      this.subActive = null
    },
    closeMenu () {
      this.menuOpen = false
      this.closeSubMenu()
      this.toggleScreenStop()
    },
    toggleScreenStop () {
      this.menuOpen ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    }
  },
  components: {
    CustomHomeBanner
  }
}
</script>
