<template>
  <div class="profile container-fluid text-center">
    <div class="row">
      <ProfileDetails />
    </div>
    <div class="align-items-center justify-content-center">
      <div class="row p-0 m-3 justify-content-center">
        <div class="col-md-8 p-0">
          <CreatePost v-if="account.id" />
        </div>
        <div
          v-for="p in posts"
          :key="p.id"
          class="col-md-8 card elevation-3 m-4 justify-content-center"
        >
          <Post :post="p" />
        </div>
        <div class="col-md-12 d-flex justify-content-center">
          <div class="m-3 text-center" v-if="page">
            <h4>{{ page }}</h4>
          </div>
        </div>
        <div class="col-md-12 d-flex justify-content-center">
          <button
            @click="prev"
            v-if="prevPage"
            class="btn btn-sm mx-1 btn-primary text-center"
          >
            Previous Page
          </button>

          <button
            @click="next"
            v-if="nextPage"
            class="btn btn-sm mx-1 btn-primary text-center"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

// NOTE pre-populate the edit profile modal form
<script>
import { computed, watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
import { profilesService } from "../services/ProfilesService";
import { postService } from "../services/PostService";
import { picturesService } from "../services/PicturesService";
export default {
  name: "Profile",
  setup() {
    const route = useRoute();
    watchEffect(async () => {
      try {
        if (route.name == "Profile") {
          await profilesService.getProfile(route.params.id);
          await picturesService.getAll();
          await postService.getAll(
            "api/posts",
            "?creatorId=" + route.params.id
          );
        }
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      page: computed(() => AppState.page),
      prevPage: computed(() => AppState.prevPage),
      nextPage: computed(() => AppState.nextPage),
      profile: computed(() => AppState.profile),

      async next() {
        try {
          await postService.getAll(this.nextPage);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },

      async prev() {
        try {
          await postService.getAll(this.prevPage);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>