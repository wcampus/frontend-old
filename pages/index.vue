<template lang="pug">
div
  container
    grid-component(:column="$mq | mq({phone: 2,tablet: 3,laptop: 4})")
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
  background-color: red
</style>
