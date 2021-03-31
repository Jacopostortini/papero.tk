<template>
  <div class="error__main-panel">
        <div class="image-wrapper">
          <img class="home-button" src="@/assets/logoOrange.png" alt="Home">
        </div>
        <div class="title-wrapper">
          <h1>Coming Soon</h1>
        </div>
      <div class="text-wrapper">
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
  text-align: center;
  color: black;
  .image-wrapper {
    position: absolute;
    top: 10px;
    width: calc(10% + 20px);
    margin-left: 1%;
    img {
      width: 100%;
    }
  }
  .title-wrapper{
    width: 100%;
    margin-top: 10px;
    h1{
      font-size: calc(4vw + 15px);
    }
  }

  .text-wrapper{
    width: 80%;
    margin: auto;
    padding-top: 5%;
    font-size: calc(2vw + 20px);
    a{
      color: $theme-color;
      text-decoration: underline;
      cursor: pointer;
    }
  }


}
</style>