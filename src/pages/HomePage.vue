<template>
  <div class="align-items-center justify-content-center">
    <div class="col mt-2">
      <Search />
    </div>
    <div class="p-5 m-5 bg-white rounded elevation-3">
      <div
        v-for="p in posts"
        :key="p.id"
        class="col-md-12 card selectable elevation-3 mt-5"
      >
        <Post :post="p" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { postService } from "../services/PostService";
import { AppState } from "../AppState";
export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        await postService.getAll();
      } catch (error) {
        logger.log(error);
        Pop.toast(error.message, "error");
      }
    });
    return { posts: computed(() => AppState.posts) };
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
