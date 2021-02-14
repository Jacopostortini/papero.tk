<template>
  <div class="logo__main-panel" @click="playAudio">
    <img src="../assets/logo.gif" ref="logo_gif_image">
  </div>
</template>

<script>
export default {
  name: "Loader",
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
    this.soundPlayer.src = require("@/assets/easter-egg.wav");
    this.soundPlayer.setAttribute("preload", "auto");
    this.soundPlayer.setAttribute("controls", "none");
    this.soundPlayer.style.display = "none";
    document.body.appendChild(this.soundPlayer);
  }
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