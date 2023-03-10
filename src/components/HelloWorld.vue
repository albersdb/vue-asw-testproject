<script setup>
import { useActions } from "vuex-composition-helpers/dist";
const { incrementCount } = useActions(["incrementCount"]);
</script>
<template>
  <v-card-text>
    The button has been clicked {{ currentCount() }} times.
  </v-card-text>
  <v-btn @click="incrementCount(1)">Test Button</v-btn>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data: () => ({}),
  computed: mapGetters(["currentCount"]),
  methods: mapActions(["setPageId"]),
  mounted() {
    //const { count } = useState(["count"]);
    this.setPageId(1);
    console.log(`The initial count is ${this.currentCount()}`);
  },
};
</script>
