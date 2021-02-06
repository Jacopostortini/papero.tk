<template>
  <div class="user-profile__main-panel">
    <h1>Welcome back <span>{{username}}</span></h1>
    <img :src="logoutImg" @click="logout">
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      logoutImg: require("@/assets/logout.png")
    }
  },
  methods: {
    logout(){
      this.logoutImg = require("@/assets/logout.gif");
      let that = this;
      let t = setInterval(()=>{
        that.logoutImg = "/logout.png";
        that.$emit("logout");
        clearInterval(t);
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>

.user-profile__main-panel{
  grid-area: user;
  color: white;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    height: 70%;
    margin-right: 2%;
  }
}
</style>