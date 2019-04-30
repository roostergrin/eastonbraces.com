import Vue from 'vue'
import BaseBGImg from 'components/base/base-bg-img/base-bg-img'
import BaseContainer from 'components/base/base-container/base-container'
import BaseHero from 'components/base/base-hero/base-hero'
import BaseIcon from 'components/base/base-icon/base-icon'
import BaseLoader from 'components/base/base-loader/base-loader'

const components = () => {
  Vue.component('BaseBGImg', BaseBGImg)
  Vue.component('BaseContainer', BaseContainer)
  Vue.component('BaseHero', BaseHero)
  Vue.component('BaseIcon', BaseIcon)
  Vue.component('BaseLoader', BaseLoader)
}

export default components()
