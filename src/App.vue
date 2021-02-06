<template>
  <router-view/>
</template>

<style lang="scss">

@font-face {
  font-family: "LightFont";
  src: local("LightFont"), url(./fonts/KgHappyLight.ttf) format("truetype");
}

@font-face {
  font-family: "DarkFont";
  src: local("DarkFont"), url(./fonts/KgHappyDark.ttf) format("truetype");
}

#app {
  font-family: DarkFont, Avenir, Helvetica, Arial, sans-serif;
  color: white;
  width: 100%;
  height: 100%;
}
</style>
