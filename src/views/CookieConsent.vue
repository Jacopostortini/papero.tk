<template>
  <cookie-consent/>
</template>


<script>


import CookieConsent from 'vue-cookieconsent-component'

export default {
  name: 'HelloWorld',
  components: {
    CookieConsent
  }
}
</script>

<style scoped lang="scss">
@import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent";
// example or use it
@import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent-bottom";
@import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent-transition";
</style>