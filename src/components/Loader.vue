<template>
  <div class="logo__main-panel">
    <img src="../assets/logo.gif" ref="logo_gif_image">
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style lang="scss" scoped>

.logo__main-panel{
  animation: gif-loading 4s;
  position: absolute;
  height: fit-content;
  width: 0;

  img{
    width: 100%;
  }
}

@keyframes gif-loading {
  0% {
    width: 80vw;
    margin-left: 10vw;
  }
  80%{
    width: 80vw;
    margin-left: 10vw;
  }
  100%{
    width: 0;
    margin-left: 45vw;
  }

}
</style>