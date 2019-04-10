<template lang='pug' src='./custom-new-free.pug'></template>

<script>
import FormFree from 'components/form/form-free/form-free'

export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  components: {
    FormFree
  }
}
</script>
