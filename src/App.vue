<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="relative">
    <NavBar class="fixed z-10 top-0 left-0 right-0" />
    <BG class="" />
    <!-- <Footer class="" /> -->
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import BG from "./components/BG.vue";
// import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    BG,
    // Footer,
  },
};
</script>
