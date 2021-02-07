<template>
  <nav>
    <v-app-bar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <NuxtLink to="/Landingpage">
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Chat</span>
          <span>Box</span>
        </v-toolbar-title>
      </NuxtLink>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary class="indigo">
      <v-list>
        <v-list-item>
          <NuxtLink to="/Chatbox">
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >General Chat room</v-list-item-title
              >
            </v-list-item-content></NuxtLink
          >
        </v-list-item>
        <v-list-item>
          <NuxtLink to="/SportRoom">
            <v-list-item-content>
              <v-list-item-title class="white--text">
                Sport Chat room</v-list-item-title
              >
            </v-list-item-content>
          </NuxtLink>
        </v-list-item>
        <v-list-item>
          <NuxtLink to="/MusicRoom">
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >Music Chat room</v-list-item-title
              >
            </v-list-item-content>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
}
</script>

<style></style>
