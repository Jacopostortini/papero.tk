<template>
  <div class="games-table__main-table">
    <div class="games-table__games-container">
      <GameOfTable v-for="(game, index) in games" :key="index" :game="game">
      </GameOfTable>
    </div>
  </div>
</template>

<script>
import games from "../constants/games"
import GameOfTable from "@/components/GameOfTable";
export default {
  name: "GamesTable",
  data(){
    return {
      games: games
    }
  },
  methods: {
    redirect(url){
      window.location.pathname = url;
    }
  },
  components: {GameOfTable}
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.games-table__main-table{
  //background-color: white;
  grid-area: games;
  justify-self: center;
  align-self: center;
  width: 100%;
  max-height: 70%;
  max-width: 1000px;
  text-align: center;

  .games-table__games-container{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    div {
      border: 2px solid black;
      margin: 2%;
      padding: 1%;
      width: 40vw;
      min-width: 200px;
      min-height: 50px;
      max-width: 500px;
      max-height: 80px;
      height: 5vw;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      animation: bounce 1s;
      transition: all 0.5s;

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