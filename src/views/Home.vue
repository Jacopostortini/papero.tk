<template>
  <div class="main-panel">
    <GifContainer/>
    <GamesTable v-if="interval===null"/>
    <UserProfile v-if="interval===null && logged" username="jacopo"/>
    <button class="login-button" v-if="interval===null && !logged" @click="showLoginPopup=true">Login</button>
    <LoginPopup v-if="showLoginPopup" @click="showLoginPopup=false"/>
  </div>
</template>

<script>
import GifContainer from "../components/GifContainer";
import GamesTable from "../components/GamesTable";
import UserProfile from "../components/UserProfile";
import LoginPopup from "../components/LoginPopup";
export default {
  name: 'Home',
  components: {LoginPopup, UserProfile, GamesTable, GifContainer},
  data(){
    return {
      interval: null,
      showLoginPopup: false,
      logged: false
    }
  },
  mounted() {
    this.interval = setInterval(()=>{
      clearInterval(this.interval);
      this.interval=null;
    }, 7000);
  },

}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.main-panel{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 20% 80%;
  grid-template-areas: "logo user" "games games";

  button{
    grid-area: user;
    width: fit-content;
    height: fit-content;
    align-self: center;
    justify-self: end;
    margin-right: 10%;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    font-size: 150%;
    padding: 1% 2% 1% 2%;
    transition: all 0.5s;

    &:hover{
      background-color: white;
      color: $theme-color-dark;
    }

    &:focus{
      outline: none;
    }
  }
}

</style>
