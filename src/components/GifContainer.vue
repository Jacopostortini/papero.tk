<template>
  <div class="logo__main-panel" @click="playAudio">
    <img src="../assets/logo.gif" ref="logo_gif_image">
  </div>
</template>

<script>
export default {
  name: "GifContainer",
  data(){
    return {
      soundPlayer: null
    }
  },
  methods: {
    playAudio(){
      this.soundPlayer.play();
    }
  },
  mounted() {
    this.soundPlayer = document.createElement("audio");
    this.soundPlayer.src = "/easter-egg.wav";
    this.soundPlayer.setAttribute("preload", "auto");
    this.soundPlayer.setAttribute("controls", "none");
    this.soundPlayer.style.display = "none";
    document.body.appendChild(this.soundPlayer);
  }
}
</script>

<style lang="scss" scoped>

.logo__main-panel{
  grid-area: logo;
  height: fit-content;
  animation: gif-loading 4s;
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