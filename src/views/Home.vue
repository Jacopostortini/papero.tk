<template>
  <div class="main-panel">
    <UserHamburgerMenu/>
    <Header></Header>
    <GamesTable/>
  </div>
</template>

<script>

import GamesTable from "../components/GamesTable";
import {defineAsyncComponent} from "vue";
import Header from "@/components/Header";

const UserHamburgerMenu = defineAsyncComponent(() => import("../components/UserHamburgerMenu" /* webpackChunkName: "userHamburgerMenu" */));

export default {
  name: 'Home',
  components: {
    Header, UserHamburgerMenu, GamesTable,
  },
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
