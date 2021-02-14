<template>
  <div class="main-panel">
    <UserHamburgerMenu/>
    <Loader v-if="gifDisplaying"/>
    <Header v-if="!gifDisplaying"/>
    <GamesTable v-if="!gifDisplaying"/>
  </div>
</template>

<script>

import axios from "axios";
import {getLoginInfoUrl, logoutUrl} from "../constants/constants";
import Loader from "../components/Loader";
import Header from "../components/Header";
import GamesTable from "../components/GamesTable";
import UserHamburgerMenu from "../components/UserHamburgerMenu";
export default {
  name: 'Home',
  components: {UserHamburgerMenu, GamesTable, Header, Loader},
  data(){
    return {
      gifDisplaying: null,
      showLoginPopup: false,
      username: null,
      logged: null,
      googleSignedIn: null
    }
  },
  methods: {
    logout(){
      this.logged = false;
      axios.get(logoutUrl);
    },
    login(){
      let from_location = window.location;
      window.location.href = '/auth/google?from_location='+from_location;
    }
  },
  mounted() {
    if(!sessionStorage.getItem("gifdisplayed")){
      this.gifDisplaying = setInterval(()=>{
        clearInterval(this.gifDisplaying);
        this.gifDisplaying = null;
        sessionStorage.setItem("gifdisplayed", "true");
      }, 4000);
    }
    axios
        .get(getLoginInfoUrl)
        .then((response)=>{
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
  grid-template-rows: 20% 80%;
  grid-template-areas: "header" "games";

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
