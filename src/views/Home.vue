<template>
  <div class="main-panel">
    <UserHamburgerMenu/>
    <Loader v-if="gifDisplaying"/>
    <Header v-if="!gifDisplaying"/>
    <GamesTable v-if="!gifDisplaying"/>
  </div>
</template>

<script>

import Loader from "../components/Loader";
import Header from "../components/Header";
import GamesTable from "../components/GamesTable";
import UserHamburgerMenu from "../components/UserHamburgerMenu";
import {useRouter} from "vue-router";
export default {
  name: 'Home',
  components: {UserHamburgerMenu, GamesTable, Header, Loader},
  data(){
    return {
      router: useRouter(),
      gifDisplaying: null,
      showLoginPopup: false
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
