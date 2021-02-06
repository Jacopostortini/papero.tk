<template>
  <div class="main-panel">
    <GifContainer/>
    <UserProfile v-if="interval===null && logged" :username="username" :google-signed-in="googleSignedIn" @logout="logout"/>
    <div class="nologin-panel" v-if="interval===null && !logged">
      <h1>Welcome</h1>
      <button class="login-button" @click="showLoginPopup=true">Login</button>
    </div>
    <LoginPopup v-if="showLoginPopup" @click="showLoginPopup=false" @login="login"/>
    <GamesTable v-if="interval===null"/>
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
      username: "Jacopo",
      logged: true,
      googleSignedIn: null
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
        .then((response)=>{
          console.log(response);
          if(response.data){
            this.logged = true;
            this.username = response.data.username;
            this.googleSignedIn = response.data.google_signed_in;
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
      width: 20%;
      height: 50%;
      align-self: center;
      justify-self: end;
      margin-right: 10%;
      border: 2px solid white;
      background-color: transparent;
      color: white;
      font-size: 2.5vw;
      padding: 1%;
      transition: all 0.5s;
      animation: login-animation 2s infinite linear;

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
    0% {transform: rotate(0deg)}
    40% {transform: rotate(0deg)}
    42% {transform: rotate(5deg)}
    44% {transform: rotate(0deg)}
    46% {transform: rotate(-5deg)}
    48% {transform: rotate(0deg)}
    100% {transform: rotate(0deg)}
  }
}

</style>
