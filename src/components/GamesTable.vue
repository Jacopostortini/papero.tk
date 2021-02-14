<template>
  <div class="games-table__main-table">
    <div class="games-table__games-container">
      <div v-for="(game, index) in games" :key="index" @click="redirect(game.url)">
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
      games: games
    }
  },
  methods: {
    redirect(url){
      window.location.pathname = url;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.games-table__main-table{
  animation: bounce 1s;
  grid-area: games;
  justify-self: center;
  align-self: center;
  width: 100%;
  max-height: 90%;
  text-align: center;

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

  @keyframes bounce {
    0%{
      transform: translateY(-100px);
      opacity: 0;
    }
    100%{
      transform: translateY(0);
    }

  }
}
</style>