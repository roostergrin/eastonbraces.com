<template lang='pug' src='./block-testimonials.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  computed: {
    slideList () {
      return this.content.slides
    }
  },
  mounted () {
    this.slideChange()
  },
  methods: {
    slideChange () {
      setInterval(() => {
        if (this.showing === this.slideList.length - 1) {
          this.showing = 0
          this.next = 1
          this.prev = 2
        } else if (this.next === this.slideList.length - 1) {
          this.showing = this.showing + 1
          this.next = 0
          this.prev = this.prev + 1
        } else if (this.prev === this.slideList.length - 1) {
          this.showing = this.showing + 1
          this.next = this.next + 1
          this.prev = 0
        } else {
          this.showing = this.showing + 1
          this.next = this.next + 1
          this.prev = this.prev + 1
        }
        this.active = 'next'
        setTimeout(() => {
          this.active = null
        }, 100)
      }, 7500)
    }
  },
  data () {
    return {
      swiperOptiontestslider: {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        speed: 1000,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.testislider .swiper-button-next',
          prevEl: '.testislider .swiper-button-prev'
        }
      }
    }
  }
}
</script>
