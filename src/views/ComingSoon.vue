<template>
  <div class="error__main-panel">
    <div class="wrapper">
      <h1>Coming Soon</h1>
      <p>We're always working to make <strong>papero.me</strong> better.</p>
      <p>For any questions and suggestions we're here for you at <a>info@papero.me</a></p>
    </div>
  </div>
</template>

<script>

export default {
  name: "ComingSoon",
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
  font-size:calc(12px + 2vw);
  text-align: center;

  .wrapper{
    width: 80%;
    display: flex;
    flex-flow: column;
    justify-content: center;

    a{
      color: #000000;
      text-decoration: underline;
      cursor: pointer;
    }

  }
}
</style>