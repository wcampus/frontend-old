<i18n>
{
	"en": {
    "search": "Search"
	},
	"ru": {
    "search": "Найти"
	},
	"kz": {
    "search": "İzdew"
	}
}
</i18n>

<template lang="pug">
ssr-loading(v-cloak)
  .default-layout
      Sidebar
      section
        .navbar
          span
            fa(name="search", scale="0.7")
            span {{ $t("search") }}
        nuxt.content
</template>

<script>
import Sidebar from '~/components/bars/Sidebar'
import SSRLoading from "~/components/toolkit/SSRLoading"

export default {
  components: {
    Sidebar,
    SsrLoading: SSRLoading
  }
}
</script>


<style lang="sass">
@import "assets/styles/fonts/lato.sass"

.default-layout
  font-family: "Lato", Helvetica, sans-serif !important
  font-weight: 400
  color: #2c3e50
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
    padding: 27px 20px
    background: #FFFFFF
    width: 100%
    margin: 0
    height: 40px
    color: gray
    background-color: white
    box-sizing: border-box
    display: flex
    flex-direction: column
    justify-content: center
    
    span span
      margin-left: 5px
</style>

<style>
  [v-cloak] {
    display: none;
  }
</style>