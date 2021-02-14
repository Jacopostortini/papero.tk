<template>
  <router-view/>
</template>

<style lang="scss">

html{
  background-color: orange;
  background-image: url(./assets/background.png);
  background-size: 400px auto;
}

@font-face {
  font-family: "LightFont";
  src: local("LightFont"), url(./fonts/KgHappyLight.ttf) format("truetype");
}

@font-face {
  font-family: "DarkFont";
  src: local("DarkFont"), url(./fonts/KgHappyDark.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  width: 100%;
  height: 100%;
}
</style>
