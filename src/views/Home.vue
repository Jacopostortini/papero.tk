<template>
  <div class="main-panel">
    <GifContainer/>
    <GamesTable v-if="interval===null"/>
    <UserProfile v-if="interval===null && logged" :username="username" @logout="logout"/>
    <button class="login-button" v-if="interval===null && !logged" @click="showLoginPopup=true">Login</button>
    <LoginPopup v-if="showLoginPopup" @click="showLoginPopup=false" @login="login"/>
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
      username: null,
      logged: false
    }
  },
  methods: {
    logout(){
      this.logged = false;
    },
    login(username){
      this.logged = true;
      this.username = username;
    }
  },
  mounted() {
    if(!sessionStorage.getItem("gifdisplayed")){
      this.interval = setInterval(()=>{
        clearInterval(this.interval);
        this.interval=null;
        sessionStorage.setItem("gifdisplayed", "true");
      }, 4000);
    }
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
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    align-self: center;
    justify-self: end;
    margin-right: 10%;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    font-size: 150%;
    padding: 1%;
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
