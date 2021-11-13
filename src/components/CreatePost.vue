<template>
  <form @submit.prevent="createPost" class="input-group">
    <div class="input-group">
      <button
        class="btn btn-outline-primary"
        @click.prevent="createPost"
        type="submit"
        id="button-addon1"
      >
        Create Post:
      </button>
      <input
        v-model="state.editable.body"
        type="text"
        class="form-control"
        placeholder=". . ."
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <input
        v-model="state.editable.imgUrl"
        type="url"
        class="form-control"
        placeholder="image link"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
    </div>
  </form>
</template>


<script>
import { reactive } from "@vue/reactivity";
import { postService } from "../services/PostService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  setup() {
    const state = reactive({
      editable: {},
    });
    return {
      state,
      async createPost() {
        try {
          await postService.createPost(state.editable);
          state.editable = {};
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