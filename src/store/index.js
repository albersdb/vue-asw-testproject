import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    count: 0,
    vuerouter: router,
    drawerOpen: false,
    currentPageId: 1,
    navitems: [
      { id: 1, title: "Home", link: "/" },
      { id: 2, title: "About", link: "/about" },
      { id: 3, title: "Games", link: "/games" },
      { id: 4, title: "Random", link: "/random" },
      { id: 5, title: "Links", link: "/links" },
    ],
  },
  getters: {},
  mutations: {
    INCREMENT_COUNT(state, payload) {
      state.count += payload;
    },
    CHANGE_PAGE(state, payload) {
      console.log(`page id payload: ${payload}`);
      var nav = state.navitems.find((i) => {
        return i.id == payload;
      });
      state.vuerouter.push({ path: nav.link, query: {} });
      state.currentPageId = payload;
    },
  },
  actions: {
    incrementCount(context, payload) {
      console.log("Incrementing count!");
      setTimeout(() => {
        context.commit("INCREMENT_COUNT", payload);
        console.log("Count Incremented!");
      }, 1000);
    },
    changePage(context, payload) {
      console.log("changing page!");
      setTimeout(() => {
        context.commit("CHANGE_PAGE", payload);
        console.log("Page Changed!");
      }, 1000);
    },
  },
  modules: {},
});
