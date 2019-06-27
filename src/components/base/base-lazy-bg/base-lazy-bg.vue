<template lang='pug' src='./base-lazy-bg.pug'></template>

<script>
export default {
  props: {
    src: {
      type: String
    },
    bgColor: {
      type: String,
      default: '#f8f8f8'
    },
    alt: {
      type: String,
      default: 'I am a decorative image.'
    }
  },
  data () {
    return {
      currentImg: null,
      loading: true,
      loaded: false,
      intersectionOptions: {
        root: null,
        rootMargin: '500px 0px 0px 0px',
        threshold: [0]
      }
    }
  },
  mounted () {
    this.loaded = true
  },
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === 'in') {
        let downloadingImage = new Image()
        this.currentImg = this.src
        downloadingImage.onload = () => {
          this.loading = false
          console.log('loaded')
        }
        downloadingImage.src = this.src
      }
    }
  }
}
</script>
