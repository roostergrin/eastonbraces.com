<template lang='pug' src='./custom-treatments-faq.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      swiperOptionbeforeafter: {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        speed: 1000,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.beforeafter_slider .swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.beforeafter_slider .swiper-button-next',
          prevEl: '.beforeafter_slider .swiper-button-prev'
        }
      }
    }
  }
}
</script>
