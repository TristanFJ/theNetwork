<template>
  <main class="home container-fluid">
    <div class="row">
      <div class="col m-0 p-0">
        <Navbar />
      </div>
      <div class="col-md-10">
        <router-view />
      </div>
      <div class="col-md-2 p-0">
        <div v-for="p in pictures" :key="p.title">
          <Picture :picture="p" />
        </div>
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
      pictures: computed(() => AppState.pictures),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
