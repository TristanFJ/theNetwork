<template>
  <div class="search row px-5">
    <div class="col">
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
export default {
  setup() {
    const searchText = ref("");
    return {
      searchText,
      async searchPosts() {
        try {
          logger.log(searchText.value);
          await postService.getAll("?query=" + searchText.value);
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