<template>
  <v-app>
    <Sidebar />
    <nuxt />
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
  data() {
    return {
      Sidebar,
    }
  },
}
</script>
