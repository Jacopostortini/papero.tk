<template>
  <div class="header__main-panel">
    <img src="@/assets/title.png">
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.header__main-panel{
  animation: fade-in 1s;
  grid-area: header;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: auto;
  @media (max-width: 500px) {
    position: relative;

  }

  img{
    padding: 1% 3% 1% 3%;
    width: 80%;
  }

  @keyframes fade-in {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
}
</style>