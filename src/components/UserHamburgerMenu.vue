<template>
  <div class="user-hamburger-menu__main-panel" @click.stop="" :class="{'hidden': !show}">
    <div class="user-hamburger-menu__menu">
      <img class="home-button" src="@/assets/logo.png" @click="playAudio">
      <div class="logged-menu" v-if="username">
        <div>
          <p>Username: <strong>{{decodeURIComponent(username)}}</strong></p>
          <button @click="logout">Logout</button>
        </div>
        <button class="proceed-with-google" v-if="!logged" @click="redirectToGoogle">Activate sync with google</button>
      </div>
      <div class="not-logged-menu" v-else>
        <p>You are currently not logged in</p>
        <button class="proceed-with-google" @click="redirectToGoogle">Sign in now with google</button>
      </div>
    </div>
    <div class="user-hamburger-menu__icon" @click="show=!show" :class="{'rotated': show}">
      <img src="@/assets/hamburger_icon.png">
    </div>
  </div>
</template>

<script>
import {getLoginInfoUrl, logoutUrl} from "../constants/constants";
import axios from "axios";

export default {
  name: "UserHamburgerMenu",
  data(){
    return{
      show: false,
      username: null,
      logged: false
    }
  },
  mounted() {
    window.addEventListener("click", ()=>{this.show=false});
    axios
      .get(getLoginInfoUrl)
      .then((response)=>{
        if(response.data){ //logged in in some way
          this.username = response.data.username;
          this.logged = response.data.google_signed_in;
        }
      });
  },
  methods: {
    redirectToGoogle(){
      let from_location = window.location;
      window.location.href = '/auth/google?from_location='+from_location;
    },
    logout(){
      axios.get(logoutUrl);
      this.username = null;
      this.logged = false;
    },
    playAudio(){
      let soundPlayer = document.createElement("audio");
      soundPlayer.src = require("@/assets/easter-egg.wav");
      soundPlayer.setAttribute("preload", "auto");
      soundPlayer.setAttribute("controls", "none");
      soundPlayer.style.display = "none";
      document.body.appendChild(soundPlayer);
      soundPlayer.play();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.user-hamburger-menu__main-panel{
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  @media (max-width: 700px) {
    width: 70%;
  }
  height: fit-content;
  display: flex;
  padding: 2% 2% 10% 2%;
  flex-flow: row;
  transition: all 0.5s;
  z-index: 1;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  background-color: $theme-color;

  &.hidden{
    transform: translateX(-100%);
  }

  .user-hamburger-menu__menu{
    display: flex;
    flex-flow: column;
    align-items: center;

    .home-button{
      width: 90%;
    }

    .logged-menu{
      margin-top: 10%;
      display: flex;
      flex-flow: column;
      align-items: center;
      color: white;
      width: 100%;

      div{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
      }
    }

    .not-logged-menu{
      margin-top: 10%;
      display: flex;
      flex-flow: column;
      align-items: center;
      color: white;

      p{
        margin: 10px;
      }
    }
  }

  .user-hamburger-menu__icon{
    position: absolute;
    width: 10%;
    height: min-content;
    right: calc(-10% - 20px);
    top: 20px;

    transition: all 0.5s;
    z-index: 5;

    img{
      float: left;
      width: 100%;
      height: auto;
    }

    &.rotated{
      transform: rotate(90deg);
    }
  }
}
</style>