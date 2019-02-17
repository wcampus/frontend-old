<template lang="pug">
nav(role='navigation')
  .top
    .logo
      Logo
    
    
</template>

<script>
import Logo from "~/components/bars/Logo"

export default {
  components: {
    Logo
  }
}
</script>

<style lang="sass" scoped>
nav
  height: 100vh !important
  background: #f5f5f5
  min-width: 200px
  max-width: 200px
  padding: 0
  margin: 0

.top
  padding: 15px
  
</style>
