<template>
  <PageNav></PageNav>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",

  components: {
    PageNav,
  },
  data: () => ({
    drawer: false,
    items: [
      { id: 1, title: "Home", link: "/home" },
      { id: 2, title: "About", link: "/about" },
      { id: 3, title: "Games" },
      { id: 4, title: "Random" },
      { id: 5, title: "Links" },
    ],
  }),
});
</script>
