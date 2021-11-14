<template>
  <div class="align-items-center justify-content-center">
    <div class="col m-0">
      <Search />
    </div>

    <div class="p-0 m-3">
      <CreatePost v-if="account.id" />
      <div
        v-for="p in posts"
        :key="p.id"
        class="col-md-12 card elevation-3 mt-5"
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
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { postService } from "../services/PostService";
import { picturesService } from "../services/PicturesService";
import { AppState } from "../AppState";
import { useRouter } from "vue-router";
export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        await postService.getAll();
        await picturesService.getAll();
      } catch (error) {
        logger.log(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      page: computed(() => AppState.page),
      prevPage: computed(() => AppState.prevPage),
      nextPage: computed(() => AppState.nextPage),

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

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
