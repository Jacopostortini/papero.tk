<template>
  <div class="games-table__main-table">
    <h1>Games</h1>
    <div class="games-table__games-container">
      <div v-for="(game, index) in games" :key="index" @click="redirect(game.link)">
        {{game.name}}
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

.games-table__main-table{
  grid-area: games;
  justify-self: center;
  align-self: start;
  width: 100%;
  height: 90%;
  text-align: center;
  display: grid;
  grid-template-rows: 20% 80%;

  h1{
    margin: 10% 0 0 0;
  }

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
      padding-left: 1%;
      padding-right: 1%;
      max-width: 20%;
      width: fit-content;
      height: 40%;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      transition: background-color 0.5s;

      img{
        height: 50%;
      }

      &:hover{
        background-color: white;
      }
    }
  }
}
</style>