<template lang="pug" src="./main-form.pug"></template>

<script>
import api from 'api'
import axios from 'axios'

export default {
  data: () => {
    return {
      fullName: '',
      clientEmail: '',
      clientPhone: '',
      comments: '',
      postUrl: api + '/rg-mail/v1/contact',
      formSubmitted: false,
      formSuccess: false
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
        .then(result => {
          if (result) {
            this.onSubmit()
          }
        })
        .catch((e) => {
          console.log(e, 'validate')
        })
    },
    onSubmit () {
      this.formSubmitted = true
      axios.post(this.postUrl, {
        fullName: this.fullName,
        clientEmail: this.clientEmail,
        clientPhone: this.clientPhone,
        comments: this.comments
      })
        .then(res => {
          this.formSuccess = true
          setTimeout(() => {
            window.location.href = 'https://eastonbraces.com/thank-you/'
          }, 400)
          this.fullName = ''
          this.clientEmail = ''
          this.clientPhone = ''
          this.comments = ''
        })
        .catch(e => {
          console.log(e, 'submitted')
        })
    }
  }
}
</script>
