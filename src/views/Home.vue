<template>
  <div class="main-panel">
    <UserHamburgerMenu :show="showHamburgerMenu"
                       :src="require('@/assets/hamburger_icon.png')"
                       @toggle-show="showHamburgerMenu=$event"/>
    <Header></Header>
    <GamesTable/>
     </div>
</template>

<script>

import GamesTable from "../components/GamesTable";
import {defineAsyncComponent} from "vue";
import Header from "@/components/Header";
import axios from "axios";
import {urls} from "@/constants/constants";
import store from "../store/index";
const UserHamburgerMenu = defineAsyncComponent(() => import("../components/UserHamburgerMenu" /* webpackChunkName: "userHamburgerMenu" */));

export default {
  name: 'Home',
  components: {
    Header, UserHamburgerMenu, GamesTable
  },
  data() {
    return {
      showHamburgerMenu: false,
    }
  },
  beforeRouteEnter(to, from, next){
    const createLocalAccount = () => {
      axios
          .get(urls.createLocalAccountUrl)
          .then((response) => {
            store.dispatch("setLogged", false);
            store.dispatch("setUsername", response.data.username);
            next();
          })
          .catch(() => {
            location.href = location.origin + "/error?from=" + location.pathname;
          });
    }
    if (store.state.logged === -1 || store.state.username === "") {
      axios.get(urls.getLoginInfoUrl)
          .then(response => {
            if (!response.data) createLocalAccount();
            else {
              store.dispatch("setLogged", response.data.google_signed_in);
              store.dispatch("setUsername", response.data.username);
              next();
            }
          })
          .catch(() => {
            location.href = location.origin + "/error?from=" + location.pathname;
          });
    } else if(store.state.username === null && store.state.logged === false){
      createLocalAccount();
    } else next();
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.main-panel{
  height: 100%;
  width: 100%;
  background-color: #eaeaea;
  margin: auto;
  overflow: scroll;


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
