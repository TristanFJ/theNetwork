<template>
  <div class="details">
    <div class="col-md-12 bg-white elevation-2 m-3">
      <img :src="profile.coverImg" style="height: 300px" class="my-3" alt="" />
      <h1>
        <img :src="profile.picture" style="height: 100px" alt="" />
        {{ profile.name }}
      </h1>
      {{ profile.bio || "Bio goes here." }}
      {{ profile.class || "Class goes here." }}
      {{ profile.github || "GitHub goes here." }}
      {{ profile.resume || "Resume goes here." }}
    </div>
  </div>
</template>



<script>
import { AppState } from "../AppState";
import { computed } from "@vue/reactivity";
export default {
  setup() {
    return { profile: computed(() => AppState.profile) };
  },
};
</script>


<style lang="scss" scoped>
</style>