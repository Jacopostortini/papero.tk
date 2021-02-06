<template>
  <div class="main-panel">
    <GifContainer/>
    <GamesTable v-if="interval===null"/>
    <UserProfile v-if="interval===null && logged" :username="username" @logout="logout"/>
    <div class="nologin-panel" v-if="interval===null && !logged">
      <h1>Welcome</h1>
      <button class="login-button" @click="showLoginPopup=true">Login</button>
    </div>
    <LoginPopup v-if="showLoginPopup" @click="showLoginPopup=false" @login="login"/>
  </div>
</template>

<script>
import GifContainer from "../components/GifContainer";
import GamesTable from "../components/GamesTable";
import UserProfile from "../components/UserProfile";
import LoginPopup from "../components/LoginPopup";
import axios from "axios";
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
    axios
        .get("http://papero.tk/user/get_info")
        .then((data)=>{
          console.log(data);
          if(data){
            this.logged = true;
            this.username = data.username;
          } else{
            this.logged = false;
          }
        });
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

  .nologin-panel{
    grid-area: user;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
      margin-left: 10%;
    }

    button{
      width: 8vw;
      height: 8vw;
      border-radius: 50%;
      align-self: center;
      justify-self: end;
      margin-right: 10%;
      border: 2px solid white;
      background-color: transparent;
      color: white;
      font-size: 2.5vw;
      padding: 1%;
      transition: all 0.5s;
      animation: login-animation 10s infinite;

      &:hover{
        background-color: white;
        color: $theme-color-dark;
        animation-play-state: paused;
      }

      &:focus{
        outline: none;
      }
    }
  }

  @keyframes login-animation {
    0%{
      transform: rotate(0);
    }
    25%{
      transform: rotate(0);
    }
    40%{
      transform: rotate(360deg);
    }
    75%{
      transform: rotate(360deg);
    }
    90%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(0);
    }
  }
}

</style>
