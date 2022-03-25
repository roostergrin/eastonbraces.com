<template lang='pug' src='./custom-about-community.pug'></template>

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
        this.activeSlide >= (this.content.slides.length - 1) ? this.activeSlide = 0 : this.activeSlide += 1
      }, 7500)
    },
    slideNext () {
      this.activeSlide >= (this.content.slides.length - 1) ? this.activeSlide = 0 : this.activeSlide += 1
    },
    slidePrev () {
      this.activeSlide <= 0 ? this.activeSlide = (this.content.slides.length - 1) : this.activeSlide -= 1
    }
  },
  data () {
    return {
      activeSlide: 0,
      swiperOption1: {
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        speed: 1000,
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
