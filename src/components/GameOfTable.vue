<template>
<div @click="redirectToUrl" class="game_div" v-bind:style="{ 'background-color': game.color }" :class="{'not_available': !game.available}">
  <a class="game_name">{{game.name}}</a>

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
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";
.game_div{
  &.not_available{
    opacity: .4;
   }
}
.game_name{
  color: black;
  font-size: 200%;

}
</style>