<template>
  <HelloWorld />
</template>

<script>
import { defineComponent } from "vue";
import { useActions } from "vuex-composition-helpers/dist";
import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    HelloWorld,
  },
  data: () => ({
    drawer: false,
  }),
  methods: {},
  mounted() {
    const { setPageId } = useActions(["setPageId"]);
    setPageId(1);
    console.log(`PageNav: ${this.$router.currentRoute.value.fullPath}`);
  },
});
</script>
