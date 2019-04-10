<template lang='pug' src='./custom-new-contact.pug'></template>

<script>
import FormContact from 'components/form/form-contact/form-contact'

export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  components: {
    FormContact
  }
}
</script>
