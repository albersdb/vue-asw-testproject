<template>
  <HelloVue />
</template>

<script>
import HelloVue from "@/components/HelloVue.vue";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "AboutView",

  components: { HelloVue },
  data: () => ({}),
  computed: mapGetters(["currentCount"]),
  methods: mapActions(["setPageId"]),
  mounted() {
    this.setPageId(2);
  },
});
</script>
