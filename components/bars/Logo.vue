<template lang="pug">
 
.logo
  img(:src="getLogoImage", :alt="getLogoAlt", :height="getLogoHeight")
  template(v-if="getLogoText")
    h1(:height="getLogoHeight", class="hidden-xs-only") webcampus
    
</template>


<script>
//- img(:src="getLogoText", :alt="getLogoAlt+'-text'", :height="getLogoHeight", class="hidden-xs-only")
// import BlurShadow from "~/components/additional/BlurShadow"
 //- BlurShadow

export default {
  components: {
    // BlurShadow
  },
  props: {
    logo: {
      type: String,
      default: "webcampus"
    }
  },
  data: () => ({
    logos: {
      acs: {
        img: "acs-logo.svg",
        text: "acs-logo-text.svg",
        alt: "ACS",
        height: 40,
        url: "/"
      },
      webcampus: {
        img: "webcampus-logo.svg",
        text: "webcampus-logo-text.svg",
        alt: "WebCampus",
        height: 25,
        url: "/webcampus"
      },
      bcs: {
        img: "bcs-logo.svg",
        alt: "BCS",
        height: 60,
        url: "/"
      }
    }
  }),
  computed: {
    l() {
      return this.logos[this.logo]
    },
    getLogoImage() {
      return require("~/assets/images/" + this.l.img)
    },
    getLogoText() {
      try {
        return require("~/assets/images/" + this.l.text)
      } catch (err) {
        return false
      }
    },
    getLogoAlt() {
      return this.l.alt
    },
    getLogoHeight() {
      return this.l.height
    },
    getLogoUrl() {
      return this.l.url
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/styles/fonts/proxima-nova.sass"
@import "assets/styles/fonts/lato.sass"

.logo 
  display: flex
  justify-content: start
  align-items: center

img:first-child 
  margin-right: 3px

h1
  font-family: "Lato", Helvetica, sans-serif !important
  font-size: 16px
  letter-spacing: 2.4px
  color: #2c3e50
  margin: 0
  padding: 0px 0px 5px 10px
  
</style>
