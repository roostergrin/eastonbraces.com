<template lang='pug' src='./block-gradient.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      swiperOptioninvibeforeafter: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        loop: true,
        spaceBetween: 10,
        speed: 1000,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 50000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.invislidernew .swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.invislidernew .swiper-button-next',
          prevEl: '.invislidernew .swiper-button-prev'
        }
      }
    }
  }
}
</script>
