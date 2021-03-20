<template>
<div @click="$router.push({path: game.url})" class="game_div" v-bind:style="{ 'background-color': game.color }">
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
  }
}
</script>

<style scoped>
.game_div{
}
.game_name{
  color: black;
  font-size: 200%;

}
</style>