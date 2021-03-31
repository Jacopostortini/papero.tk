<template>
  <div class="games-table__main-table">
    <div class="games-table__games-container">
      <GameOfTable v-for="(game, index) in games" :key="index" :game="game"></GameOfTable>
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


.games-table__main-table{
  max-width: 90%;
  margin: auto;

  .games-table__games-container{
    width: 100%;
    max-width: 1500px;
    margin: auto;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 1fr 1fr 1fr;
    @media (max-width: 500px){
      width: 80%;
      display: flex;
      flex-flow: column;
      margin: auto;
    }
  }


}


</style>