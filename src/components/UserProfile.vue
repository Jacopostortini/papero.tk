<template>
  <div class="user-profile__main-panel">
    <h1>Welcome back <strong>{{username}}</strong></h1>
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
  }
}
</script>

<style lang="scss" scoped>

.user-profile__main-panel{
  grid-area: user;
  color: white;
  text-align: right;
}
</style>