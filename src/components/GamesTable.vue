<template>
  <div class="games-table__main-table">
    <h1>Games</h1>
    <div class="games-table__games-container">
      <div v-for="(game, index) in games" :key="index" @click="redirect(game.link)">
        <img :src="game.img">
      </div>
    </div>
  </div>
</template>

<script>
import games from "../constants/games"
export default {
  name: "GamesTable",
  data(){
    return {
      games: games,
      firstGame: 0,
      secondGame: 1,
      thirdGame: 2
    }
  },
  methods: {
    redirect(link){
      window.location = link;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.games-table__main-table{
  grid-area: games;
  justify-self: center;
  align-self: center;
  width: 100%;
  max-height: 90%;
  text-align: center;
  display: grid;
  grid-template-rows: 20% 80%;


  .games-table__games-container{
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    div {
      border: 2px solid white;
      margin: 2%;
      padding: 2%;
      width: 7vw;
      height: 7vw;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      transition: all 0.5s;
      border-radius: 50%;
      position: relative;
      overflow: hidden;

      img{
        position: absolute;
        height: 100%;
      }

      &:hover{
        transform: scale(1.5);
      }
    }
  }
}
</style>