<template>
  <v-container>
    <v-card class="top">
      <v-card-title
        class="text-h4 grey--text text--lighten-1 font-weight-medium flex justify-center"
      >
        chatBOX
      </v-card-title>
      <v-card-subtitle
        class="text-center text-black text-subtitle-1 font-weight-bold"
      >
        Welcome to chatBOX
      </v-card-subtitle>
      <v-card-text class="text-black font-weight-medium text-center">
        Please remember to keep it respectful and to follow our user
        guidelines.<br />
        You can press the side menu to check to the available chatrooms
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  components: {},
}
</script>

<style>
.top {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
}
a {
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  .top {
    width: 100%;
  }
}
</style>
