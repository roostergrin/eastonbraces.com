export const switchSection = {
  data () {
    return {
      currentPage: null
    }
  },
  methods: {
    switchSection (i) {
      this.currentPage = i
    }
  }
}
