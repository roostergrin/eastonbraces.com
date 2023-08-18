<template lang="pug" src="./form-contact.pug"></template>

<script>
import api from 'api'
import axios from 'axios'

export default {
  data: () => {
    return {
      fullName: '',
      guardName: '',
      clientEmail: '',
      clientPhone: '',
      additionalComments: '',
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
          console.log(e)
        })
    },
    onSubmit () {
      this.formSubmitted = true
      axios.post(this.postUrl, {
        fullName: this.fullName,
        guardName: this.guardName,
        clientEmail: this.clientEmail,
        clientPhone: this.clientPhone,
        additionalComments: this.additionalComments
      })
        .then(res => {
          this.formSuccess = true
          setTimeout(() => {
            window.location.href = 'https://eastonbraces.com/thank-you/'
          }, 400)
          this.fullName = ''
          this.guardName = ''
          this.clientEmail = ''
          this.clientPhone = ''
          this.additionalComments = ''
        })
        .catch(e => {
          console.log(e, 'submitted')
        })
    }
  }
}
</script>
