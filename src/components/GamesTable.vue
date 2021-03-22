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
  components: {GameOfTable}
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

::-webkit-scrollbar {
  display: none;
}

.games-table__main-table{
  //background-color: white;
  grid-area: games;
  justify-self: center;
  align-self: center;
  width: 100%;
  max-height: 70%;
  margin-top: 5%;
  text-align: center;

  @media all and (max-width: 1000px) and (orientation:landscape)
  {
    overflow: scroll;
  }



  .games-table__games-container{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    margin: auto ;
    height: 100%;

    div {
      border: 2px solid black;
      margin: 15px;
      padding: 1%;
      width: 40vw;
      min-width: 200px;
      min-height: 50px;
      max-width: 300px;
      max-height: 50px;
      height: 5vw;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      position: relative;
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