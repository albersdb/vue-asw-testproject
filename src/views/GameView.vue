<template>
  <TicTacToe />
</template>

<script>
import TicTacToe from "@/components/TicTacToe.vue";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "GameView",

  components: { TicTacToe },
  data: () => ({}),
  computed: mapGetters(["currentCount"]),
  methods: mapActions(["setPageId"]),
  mounted() {
    this.setPageId(3);
  },
});
</script>
