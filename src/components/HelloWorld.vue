<script setup>
import { useState, useActions } from "vuex-composition-helpers/dist";
const { count } = useState(["count"]);
const { incrementCount } = useActions(["incrementCount"]);
</script>
<template>
  <v-card-text>The button has been clicked {{ count }} times.</v-card-text>
  <v-btn @click="incrementCount(1)">Test Button</v-btn>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
  methods: {
    test() {
      this.clicks++;
    },
  },
  mounted() {
    console.log(`The initial count is ${this.clicks}`);
  },
};
</script>
