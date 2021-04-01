<template>
<div @click="redirectToUrl" class="game_container"
     v-bind:style="{'background-color': game.color, 'grid-column': game.gridColumn, 'grid-row': game.gridRow }"
     :class="{'not_available': !game.available, 'papero_image': game.isPaperoImage}">
  <img class="background_image" :src=game.image>
  <img class="title_image" :src=game.title>
  <img class="preview_image" :src=game.preview>
</div>
</template>

<script>
export default {
name: "GameOfTable",
  components: {

  },
  props: {
    game: Object
  },
  methods: {
    redirectToUrl() {
      window.location.href = this.game.url.toString();
    }
  },
  mounted() {
    console.log(this.game.image)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";
.game_container{
  transition: all .5s;
  position: sticky;
  top: 40px;
  animation: fade-in 1s;
  border-radius: 20%;
  width: 90%;
  height: auto;
  text-align: center;
  color: black;
  overflow: hidden;

  @media (max-width: 500px){
    position: relative !important;
    top: 0;
    margin-top: 10px;
    margin-bottom: 5px;
    &:hover{
      transform: scale(1) !important;
    }
  }


  &:hover{
    transform: scale(.8);
  }

  .background_image{
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .title_image{
    position: absolute;
    top: 5px;
    left: 0;
    width: 80%;
    margin-left: 10%;
    z-index: 1;
  }

  .preview_image{
    position: absolute;
    bottom: 25px;
    left: 0;
    width: 60%;
    margin-left: 20%;
    z-index: 2;
  }


  &.not_available{
    .title_image{
      top: 35%;
    }
  }

  &.papero_image{
    border-radius: 0;
    width: 100% !important;
    margin: 0 !important;
    top: calc(min(27vw, 350px));

    .title_image{
      width: 100%;
      top: -15px;
      margin: 0;

    }

    .background_image{
      display: none;
    }

    &:hover{
      transform: scale(1) !important;
    }
  }
}



</style>