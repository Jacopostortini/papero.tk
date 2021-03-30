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
  max-width: 60%;
  margin: auto;

  .games-table__games-container{
    width: 100%;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 1fr 1fr 1fr;
    @media (max-width: 700px){
      display: flex;
      flex-flow: column;
      margin: auto;
    }
  }


}


</style>