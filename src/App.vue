<template>
  <main class="home container-fluid">
    <div class="row">
      <div class="col w-100 p-0">
        <Navbar />
      </div>
      <div class="col-10">
        <router-view />
      </div>
    </div>
  </main>
  <footer></footer>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
