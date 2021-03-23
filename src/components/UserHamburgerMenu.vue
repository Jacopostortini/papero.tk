<template>
  <div class="user-hamburger-menu__main-panel" @click.stop="" :class="{'hidden': !show}">
    <div class="user-hamburger-menu__menu">
      <img class="home-button" src="@/assets/logo.png" alt="Home">
      <div class="logged-menu" v-if="username">
        <div>
          <p>Username: <br><strong>{{decodeURIComponent(username)}}</strong></p>
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
import {urls} from "../constants/constants";
import axios from "axios";

export default {
  name: "UserHamburgerMenu",
  data(){
    return{
      show: false,
      username: "Hungry Pigeon",
      logged: true
    }
  },
  mounted() {
    window.addEventListener("click", ()=>{this.show=false});
    axios
      .get(urls.getLoginInfoUrl)
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
      axios.get(urls.logoutUrl);
      this.username = null;
      this.logged = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";
::-webkit-scrollbar {
  display: none;
}

.user-hamburger-menu__main-panel{
  transition: all 0.5s;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: calc(25% + 100px);
  background-color: #ff7f1f;
  &.hidden{
    transform: translateX(-100%);
  }
  .user-hamburger-menu__menu{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 25% 20%;
    grid-template-columns: 100%;
    grid-template-areas: "logo" "user";
    align-items: center;
    justify-items: center;
    overflow-y: scroll;

    .home-button{
      margin-top: 2%;
      grid-area: logo;
      height: 90%;
    }
    .logged-menu{
      margin-top: 15%;
      display: grid;
      align-items: center;
      text-align: center;
      color: white;
      font-size: 20px;
      button{
        margin-top: 10px;
      }
      div{
        width: 100%;
        display: grid;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
      }
    }
    .not-logged-menu{
      margin-top: 10%;
      display: grid;
      flex-flow: column;
      align-items: center;
      color: white;

      font-size: 20px;
      p{
        margin: 10px;
      }
    }
  }
  .user-hamburger-menu__icon{
    position: absolute;
    width: calc(8% + 10px);
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