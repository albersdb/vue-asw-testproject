<template>
  <PageNav />
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "GameView",

  components: { PageNav },
  data: () => ({}),
  computed: mapGetters(["currentCount"]),
  methods: mapActions(["setPageId"]),
  mounted() {
    this.setPageId(3);
  },
});
</script>
