<script setup>
import { useState } from "vuex-composition-helpers/dist";
const { navitems } = useState(["navitems"]);
</script>
<template>
  <v-app>
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
    <v-app-bar color="blue-darken-4" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title>Welcome</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-card class="mx-auto" max-width="300">
        <br />
        <v-list-item
          v-for="item in navitems"
          :key="item.id"
          :title="item.title"
          @click="changePage(item.id)"
        >
        </v-list-item>
      </v-card>
    </v-navigation-drawer>
    <v-main style="height: 100vh">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  data: () => ({
    drawer: false,
  }),
  computed: mapGetters(["currentCount"]),
  methods: mapActions(["changePage"]),
  mounted() {
    console.log(`PageNav: ${this.$router.currentRoute.value.fullPath}`);
    console.log(`items: ${"".join(this.$store.navitems, ", ")}`);
  },
};
</script>
