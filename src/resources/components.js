import Vue from 'vue'
import BaseLazyImg from 'components/base/base-lazy-img/base-lazy-img'
import BaseLazyBg from 'components/base/base-lazy-bg/base-lazy-bg'
import BaseContainer from 'components/base/base-container/base-container'
import BaseHero from 'components/base/base-hero/base-hero'
import BaseIcon from 'components/base/base-icon/base-icon'
import BaseLoader from 'components/base/base-loader/base-loader'

const components = () => {
  Vue.component('BaseLazyImg', BaseLazyImg)
  Vue.component('BaseLazyBg', BaseLazyBg)
  Vue.component('BaseContainer', BaseContainer)
  Vue.component('BaseHero', BaseHero)
  Vue.component('BaseIcon', BaseIcon)
  Vue.component('BaseLoader', BaseLoader)
}

export default components()
