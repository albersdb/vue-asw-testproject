<script setup>
import { useState, useActions } from "vuex-composition-helpers/dist";
const { navitems, currentPageId } = useState(["navitems", "currentPageId"]);
const { changePage } = useActions(["changePage"]);
</script>
<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
      <v-app-bar color="primary" prominent>
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
        <HelloWorld v-if="currentPageId == 1" />
        <HelloVue v-else-if="currentPageId == 2" />
        <TicTacToe v-else-if="currentPageId == 3" />
        <HelloWorld v-else />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";
// Components
import HelloWorld from "../components/HelloWorld.vue";
import HelloVue from "../components/HelloVue.vue";
import TicTacToe from "./TicTacToe.vue";

export default defineComponent({
  name: "PageNav",
  components: {
    HelloWorld,
    HelloVue,
    TicTacToe,
  },
  data: () => ({
    drawer: false,
  }),
  methods: {},
  mounted() {
    console.log(`PageNav: ${this.$router.currentRoute.value.fullPath}`);
  },
});
</script>
