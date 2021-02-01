<template>
  <div class="logo__main-panel">
    <img src="../assets/logo.gif" ref="logo_gif_image">
  </div>
</template>

<script>
export default {
  name: "GifContainer"
}
</script>

<style lang="scss" scoped>

.logo__main-panel{
  grid-area: logo;
  height: fit-content;
  animation: gif-loading 7s;
  width: 100%;

  img{
    width: 100%;
  }
}

@keyframes gif-loading {
  0% {
    width: 85vw;
  }
  80%{
    width: 85vw;
  }
  100%{
    width: 100%;
  }

}
</style>