<template lang='pug' src='./base-bg-img.pug'></template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '@/assets/error.png'
    },
    alt: {
      type: String,
      default: 'I am an image.'
    }
  },
  data () {
    return {
      pageLoaded: false,
      imageLoading: false,
      compSrc: '@/assets/error.png',
      intersectionOptions: {
        root: null,
        rootMargin: '500px 0px 0px 0px',
        threshold: [0]
      }
    }
  },
  mounted () {
    this.pageLoaded = true
    this.setCompressed()
  },
  methods: {
    setCompressed () {
      this.compSrc = this.src.split(/\.(?=[^.]+$)/).join('-compressed.')
    },
    onWaypoint ({ going, direction }) {
      if (going === 'in') {
        console.log('worked')
        this.imageLoading = true
      }
    }
  }
}
</script>
