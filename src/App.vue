<template>
  <router-view/>
</template>

<style lang="scss">
@import "styles/global";

::-webkit-scrollbar {
  display: none;
}
#app {
  background-size: 400px auto;
  color: #ffffff;
  width: 100%;
  height: 100%;
}

button{
  font-size: 300%;
  padding: 2%;
  border-radius: 10px;
  outline: none;
  color: white;
  background: none;
  border: 2px solid white;
  transition: all 0.5s;
  margin: 10px;

  &:hover{
    background-color: white;
    color: $theme-color;
  }
}



</style>
