<template lang='pug' src='./navigation-desktop.pug'></template>

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
      dropdownShow: false,
      dropdownSmooth: false,
      height: 0,
      left: 0,
      loaded: false,
      offsetTop: null,
      showing: null
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      this.offsetTop = window.pageYOffset
    })
    if (typeof this.content !== 'undefined') {
      this.loaded = true
    }
  },
  watch: {
    'content' (data) {
      if (typeof data !== 'undefined') {
        this.loaded = true
      }
    }
  },
  methods: {
    pageLink (i) {
      this.$router.push(i.path)
    },
    hoverDropdown (i, k) {
      let left = this.$refs.root[i].offsetLeft
      let width = this.$refs.root[i].clientWidth
      this.showing = i
      this.left = left + width / 2 + 'px'
      this.$nextTick(this.setHeight(i))
    },
    setHeight (i) {
      this.height = this.$refs.link[i].clientHeight + 16 + 'px'
    },
    dropdownActive () {
      this.dropdownShow = true
      setTimeout(() => {
        this.dropdownSmooth = true
      }, 500)
    },
    dropdownLeave () {
      this.dropdownShow = false
      this.dropdownSmooth = false
      this.showing = null
    }
  },
  components: {
    CustomHomeBanner
  }
}
</script>
