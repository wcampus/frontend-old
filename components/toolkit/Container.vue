<template lang="pug">
.container(:class="$mq")
  slot
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.container 
  padding-right: 15px
  padding-left: 15px
  margin-right: auto
  margin-left: auto

  &.mobile
    width: 200px
  
  &.tablet
    width: 300px
  
  &.laptop
    width: 400px
  
</style>

