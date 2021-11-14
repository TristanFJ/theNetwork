<template>
  <div class="details">
    <div class="col-md-12 bg-white elevation-2 m-3">
      <img :src="profile.coverImg" style="height: 300px" class="my-3" alt="" />
      <h1>
        <img :src="profile.picture" style="height: 100px" alt="" />
        {{ profile.name }}
      </h1>
      <h5>Biography:</h5>
      <p>{{ profile.bio || "Bio goes here." }}</p>

      <h5>Class:</h5>
      <p>{{ profile.class || "Class goes here." }}</p>

      <h5>GitHub:</h5>
      <a :href="profile.github">{{ profile.github || "GitHub goes here" }}</a>

      <h5>linkedin:</h5>
      <a :href="profile.linkedin">{{
        profile.linkedin || "linkedin goes here"
      }}</a>

      <h5>Resume:</h5>
      <p>{{ profile.resume || "Resume goes here." }}</p>

      <h5 v-if="profile.graduated">
        Graduated <i class="mdi mdi-account-check"></i>
      </h5>
      <div class="m-2 p-2"><ProfileModal /></div>
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