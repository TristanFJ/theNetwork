<template>
  <div class="search row p-1 justify-content-center">
    <div class="col-md-8">
      <form @submit.prevent="searchPosts" class="input-group">
        <input
          v-model="searchText"
          class="form-control"
          placeholder="Search:"
          type="text"
        />
        <button class="btn btn-outline-primary">
          <i class="mdi mdi-send"></i>
        </button>
      </form>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { postService } from "../services/PostService";
import { profilesService } from "../services/ProfilesService";
import { picturesService } from "../services/PicturesService";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const searchText = ref("");
    return {
      searchText,
      async searchPosts() {
        try {
          if (route.name == "Profile") {
            await profilesService.getProfile(route.params.id);
            await picturesService.getAll();
            await postService.getAll(
              "api/posts",
              "?query=" + searchText.value + "&creatorId=" + route.params.id
            );
            return;
          }

          logger.log(searchText.value);
          await postService.getAll("api/posts", "?query=" + searchText.value);
        } catch (error) {
          logger.log(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>