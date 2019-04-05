import VueScrollTo from 'vue-scrollto'

const scrollBehavior = function (to, from) {
  if (to.hash && to.hash !== 'refer') {
    VueScrollTo.scrollTo(to.hash, { offset: -140, easing: 'ease-in' })
  } else {
    return { x: 0, y: 0 }
  }
}

export default scrollBehavior
