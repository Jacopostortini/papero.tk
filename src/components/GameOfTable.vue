<template>
<button @click="redirectToUrl" class="game_button" v-bind:style="{ 'background-color': game.color }" :class="{'not_available': !game.available}">
{{game.name}}
</button>
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
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";
.game_button{
  animation: fade-in 1s;
  border-radius: 20%;
  border: 1px solid $theme-color;
  height: 100%;
  background-color: white;
  font-size: 1.3rem;
  text-align: center;
  color: black;
  overflow: hidden;
  @media (min-width: 701px) {

    aspect-ratio: 1;

  }
  @media (max-width: 700px){
    width: 90%;
    font-size: 2rem;
    border-radius: 0;
    margin: auto;
    margin-top: 20px;
    border: 2px solid $theme-color;
  }
  @media (max-width: 700px) and (orientation: landscape){
    margin-top: 1%;
  }


  &:hover{
    background-color: $theme-color;
    color: white;
  }

  &.not_available{
    visibility: hidden;
    background-color: $theme-color;
    @media (max-width: 700px){
      display: none;
    }
    &:hover{
      background-color: white;
      color: black;
    }
  }
}

</style>