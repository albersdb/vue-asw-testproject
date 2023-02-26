<script setup>
import { useActions } from "vuex-composition-helpers/dist";
const { changePage } = useActions(["changePage"]);
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn @click="changePage(1)">Home</v-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloVue",

  components: {},
  data: () => ({}),
  methods: {
    gohome() {
      console.log("go home!");
      this.$router.push({ path: "/", query: {} });
    },
  },
});
</script>
