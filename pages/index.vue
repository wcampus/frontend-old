<template lang="pug">
div
  container
    div
      .div
        p Hey
      .div
        p Hey

</template>

<script>
import Container from '~/components/toolkit/Container.vue'

export default {
  components: {
    Container
  }
}
</script>

<style lang="sass" scoped>
.div
  background-color: white
  padding: 5px 10px
  margin: 20px 0
</style>
