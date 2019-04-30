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
      currentImg: null,
      compSrc: '@/assets/error.png',
      intersectionOptions: {
        root: null,
        rootMargin: '500px 0px 0px 0px',
        threshold: [0]
      }
    }
  },
  mounted () {
    this.setCompressed()
  },
  methods: {
    setCompressed () {
      this.compSrc = this.src.split(/\.(?=[^.]+$)/).join('-compressed.')
      this.currentImg = this.compSrc
    },
    onWaypoint ({ going, direction }) {
      if (going === 'in') {
        this.currentImg = this.src
        console.log(this.src)
      }
    }
  }
}
</script>
