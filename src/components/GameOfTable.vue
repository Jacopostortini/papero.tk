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
  margin: 10px;
  border-radius: 20%;
  border: 1px solid $theme-color;
  height: 100%;
  background-color: white;
  font-size: 1rem;
  text-align: center;
  color: black;
  @media (min-width: 501px) {

    aspect-ratio: 1;

  }
  @media (max-width: 500px){
    width: 90%;
    font-size: 2rem;
    border-radius: 0;
    margin: auto;
    margin-top: 40px;
    border: 2px solid $theme-color;
  }

  &:hover{
    background-color: $theme-color;
    color: white;
  }

  &.not_available{
    visibility: hidden;
    background-color: $theme-color;
    @media (max-width: 500px){
      display: none;
    }
    &:hover{
      background-color: white;
      color: black;
    }
  }
}

</style>