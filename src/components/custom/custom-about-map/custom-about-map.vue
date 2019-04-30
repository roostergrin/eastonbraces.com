<template lang='pug' src='./custom-about-map.pug'></template>

<script>
import MapStyles from './map.json'
import Icon from '@/assets/icons/Logo-Small.svg'

export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  data () {
    return { location: null, loc: null }
  },
  async mounted () {
    this.loc = { lat: parseFloat(this.content.map.lat), lng: parseFloat(this.content.map.lng) }
    this.createMap()
    this.addMarker(this.loc)
  },
  methods: {
    createMap () {
      /* eslint-disable */
      // instantiates map
      this.$map = new google.maps.Map(this.$refs.map, {
        center: this.loc,
        zoom: 15,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        styles: MapStyles
      })
      /* eslint-enable */
    },
    addMarker (i) {
      // creates new single marker
      /* eslint-disable */
      this.$marker = new google.maps.Marker({
        position: i,
        map: this.$map,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(Icon),
          scaledSize: new google.maps.Size(60, 60)
        }
      })
      this.$marker.addListener('click', function() {
        let newOpener = window.open()
        newOpener.opener = null
        newOpener.location = 'https://goo.gl/maps/qZ6AfFcdg8r'
      })
      /* eslint-enable */
    }
  }
}
</script>
