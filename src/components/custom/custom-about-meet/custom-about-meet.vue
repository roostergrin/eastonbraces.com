<template lang='pug' src='./custom-about-meet.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  mounted () {
    this.slideAutomate()
  },
  methods: {
    slideAutomate () {
      setInterval(() => {
        this.activeImage >= (this.content.slider.length - 1) ? this.activeImage = 0 : this.activeImage += 1
      }, 7500)
    },
    slideNext () {
      this.activeImage >= (this.content.slider.length - 1) ? this.activeImage = 0 : this.activeImage += 1
    },
    slidePrev () {
      this.activeImage <= 0 ? this.activeImage = (this.content.slider.length - 1) : this.activeImage -= 1
    }
  },
  data () {
    return {
      activeSlide: 0,
      swiperOption1: {
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        speed: 1000,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>
