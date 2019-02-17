<template lang="pug">
.default-layout
  Sidebar
  section
    .navbar
      span Search...
    nuxt.content
</template>

<script>
import Sidebar from '~/components/bars/Sidebar'

export default {
  components: {
    Sidebar
  }
}
</script>


<style lang="sass">
.default-layout
  padding: 0
  margin: 0
  height: 100%
  display: flex
  align-items: stretch

section
  width: 100%
  max-height: 100vh
  background-color: #fafafa

  .content
    overflow-y: auto

    
  .navbar
    padding: 29px 20px
    width: 100%
    margin: 0
    height: 40px
    color: gray
    background-color: white
    box-sizing: border-box
    display: flex
    flex-direction: column
    justify-content: center
</style>