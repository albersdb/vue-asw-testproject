<template>
  <PageNav></PageNav>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import { defineComponent } from "vue";
import { useActions } from "vuex-composition-helpers/dist";

export default defineComponent({
  name: "HomeView",

  components: {
    PageNav,
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
