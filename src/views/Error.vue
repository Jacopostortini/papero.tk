<template>
  <div class="error__main-panel">
    <div class="wrapper">
      <h1>Oops, looks like there was an error</h1>
      <p v-if="fromPath">We were not able to redirect you to <a :href="fromPath">{{fromPath}}</a></p>
      Try:
      <div>
        <ul>
          <li v-if="fromPath">Going again to the link above</li>
          <li v-else>Go to our <a href="/">Home</a>, maybe you shouldn't be here</li>
          <li>Checking your internet connection</li>
          <li>Restarting your browser</li>
          <li>If the problem persists send an email at <a>info@papero.me</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Error",
  computed: {
    fromPath: function () {
      console.log(this.$route.query)
      return JSON.stringify(this.$route.query)!=="{}" ? location.origin+this.$route.query.from : null;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.error__main-panel{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: black;
  font-size: calc(2vw + 10px);

  .wrapper{
    width: 80%;
    display: flex;
    flex-flow: column;
    justify-content: center;

    a{
      color: $theme-color;
      text-decoration: underline;
      cursor: pointer;
    }

    div {
      ul {
        text-align: start;
      }
    }
  }
}
</style>