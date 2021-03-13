<template>
  <div class="main-panel">
    <UserHamburgerMenu/>
    <Header/>
    <GamesTable/>
  </div>
</template>

<script>

import Header from "../components/Header";
import GamesTable from "../components/GamesTable";
import UserHamburgerMenu from "../components/UserHamburgerMenu";
export default {
  name: 'Home',
  components: {UserHamburgerMenu, GamesTable, Header},
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.main-panel{
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
