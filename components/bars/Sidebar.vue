<i18n>
{
	"en": {
    "main": "Home",
    "schedule": "Schedule",
    "roadmap": "Roadmap",
    "tasks": "tasks",
    "online": "Online",
    "messages": "Messages",
    "base": "Knowledge base",
    "tests": "Tests",
    "courses": "Courses",
    "programs": "Programs",
    "crm": "CRM",
    "saves": "Saves",
    "people": "People",
    "forum": "Forum",
    "admin": "Control"
	},
	"ru": {
    "main": "Главная",
    "schedule": "Расписание",
    "roadmap": "План действий",
    "tasks": "Задачи",
    "online": "Онлайн",
    "messages": "Сообщения",
    "base": "База знаний",
    "tests": "Тесты",
    "courses": "Курсы",
    "programs": "Программы",
    "crm": "CRM",
    "saves": "Сохранения",
    "people": "Люди",
    "forum": "Форум",
    "admin": "Управление"
	},
	"kz": {
    "main": "Bastı bet",
    "schedule": "Keste",
    "roadmap": "Josparlar",
    "tasks": "Tapsırmalar",
    "online": "Оnlayn",
    "messages": "Hattar",
    "base": "Bilim korı",
    "tests": "Sınamalar",
    "courses": "Kuwrstar",
    "programs": "Программалар",
    "crm": "CRM",
    "saves": "Saktawlar",
    "people": "Adamdar",
    "forum": "Forum",
    "admin": "Baskarma"
	}
}
</i18n>

<template lang="pug">
nav(role='navigation')
  .top
    .logo
      Logo
  .middle
    .main
      nuxt-link(:to="localePath('index')" exact) {{ $t("main") }}
      nuxt-link(:to="localePath('roadmap')") {{ $t("roadmap") }}
      // nuxt-link(to="#") {{ $t("tasks") }}
      nuxt-link(to="#") {{ $t("online") }}
      // nuxt-link(to="#") {{ $t("messages") }}
      // nuxt-link(to="#") {{ $t("saves") }}
      nuxt-link(to="#") {{ $t("people") }}
      nuxt-link(to="#") {{ $t("forum") }}
    .companies
      p - upgrade
      nuxt-link(to="#") {{ $t("courses") }}
      nuxt-link(to="#") {{ $t("base") }}
      nuxt-link(to="#") {{ $t("tests") }} 
      nuxt-link(to="#") {{ $t("admin") }}
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
@import "assets/styles/fonts/lato.sass"

nav
  font-family: "Lato", Helvetica, sans-serif !important
  height: 100vh !important
  background: #f5f5f5
  min-width: 200px
  max-width: 200px
  padding: 0
  margin: 0

.top
  padding: 15px

.middle
  padding: 15px
  max-width: 100%

.middle 
  a
    transition: all .2s ease-in-out
    display: inline-block
    border-radius: 14px
    text-decoration: none
    font-size: 15px
    color: #000
    opacity: 0.75
    padding: 5px 13px
    margin: 0 30px 6px 0

    &:hover
      opacity: 1

    span
      margin-left: 10px

  .nuxt-link-active
    // color: #3498db
    opacity: 1
    background-color: rgba(149, 165, 166, 0.2)

    // &:hover
      // color: #3498db
  
.companies
  margin-top: 15px
  *
    padding: 6px 12px
  p
    margin-bottom: 0
    font-size: 11px
    color: #bdc3c7
    text-transform: uppercase
  
.admin
  margin: 10px 0 0 0
  padding: 0

.link 
  width: 100%
</style>
