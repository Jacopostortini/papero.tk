<template>
  <div class="login-popup__main-panel">
    <div class="buttons-container" @click.stop="">
      <div class="google-login-button" @click="redirectToLogin"/>
      <div>
        <form class="temporary-account-form" @submit.prevent="playAsGuest">
          <h4>or create a temporary user choosing a username</h4>
          <input v-model="username">
          <h4 v-if="showWarning">Attention! If you create a temporary user your data could be lost and you won't be able to login from a different device. If you are sure to proceed click <u>play as guest</u> again.</h4>
          <button>Play as guest</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "LoginPopup",
  data(){
    return {
      showWarning: false,
      username: null
    }
  },
  methods: {
    playAsGuest(){
      if(this.showWarning){
        this.$emit("login", this.username)
        this.$emit("click");
      } else {
        this.showWarning = true;
      }
    },
    redirectToLogin(){
      window.location.href = "/login";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.login-popup__main-panel{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes zoom-in {
    0% {
       transform: scale(0) rotate(1000deg);
    }
    100%{
      transform: scale(1);
    }
  }

  .buttons-container{
    background: linear-gradient(45deg, $theme-color-dark, $theme-color-light);
    border-radius: 10px;
    width: 30%;
    height: 80%;
    display: grid;
    grid-template-rows: auto 1fr;
    animation: zoom-in 0.5s;

    .google-login-button{
      width: 191px;
      height: 46px;
      background-image: url("../assets/btn_google_signin_dark_normal_web.png");
      justify-self: center;
      align-self: center;
      margin-top: 2%;

      &:focus{
        background-image: url("../assets/btn_google_signin_dark_focus_web.png");
      }

      &:active{
        background-image: url("../assets/btn_google_signin_dark_pressed_web.png");
      }
    }

    .temporary-account-form{

      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;

      h4{
        font-variant: normal;
        color: white;
        text-align: center;
        font-size: 3vh;
        width: 80%;
      }

      input{
        border: none;
        font-size: 5vh;
        width: 90%;
        text-align: center;

        &:focus{
          outline: none;
        }
      }

      button{
        margin: 2%;
        border: 1px solid white;
        background-color: transparent;
        padding: 1% 2% 1% 2%;
        color: white;
        font-size: 5vh;
        transition: all 0.5s;

        &:hover{
          background-color: white;
          color: $theme-color-dark;
        }

        &:focus{
          outline: none;
        }

      }

    }
  }
}

</style>