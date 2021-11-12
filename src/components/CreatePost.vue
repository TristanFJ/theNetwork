<template>
  <form @submit.prevent="createPost">
    <label for="" class="form-label">
      <button class="btn btn-primary">Create Post:</button></label
    >
    <input
      v-model="state.editable.body"
      type="text"
      required
      class="form-control"
    />
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