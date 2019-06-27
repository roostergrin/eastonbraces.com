<template lang="pug" src="./form-free.pug"></template>

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
      technology: '',
      additionalComments: '',
      postUrl: api + '/rg-mail/v1/free',
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
        guardName: this.guardName,
        clientEmail: this.clientEmail,
        clientPhone: this.clientPhone,
        technology: this.technology,
        additionalComments: this.additionalComments
      })
        .then(res => {
          this.formSuccess = true
          setTimeout(() => {
            this.formSubmitted = false
          }, 1500)
          this.fullName = ''
          this.guardName = ''
          this.clientEmail = ''
          this.clientPhone = ''
          this.technology = ''
          this.additionalComments = ''
        })
        .catch(e => {
          console.log(e, 'submitted')
        })
    }
  }
}
</script>
