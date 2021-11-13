<template>
  <div class="post row d-flex align-items-center m-1">
    <div @click="routeTo" class="col-md-2 mx-3 selectable p-3">
      <h5>{{ post.creator.name }}</h5>
      <img :src="post.creator.picture" style="width: 150px" alt="" />
    </div>

    <div class="col-md-6 text-start px-5 mx-5">
      <samp class="h4 p-5">
        {{ post.body }}
      </samp>

      <img :src="post.imgUrl" style="width: 150px" alt="" />
    </div>
  </div>
  <!-- LIKE AND DELETE BUTTONS -->
  <div class="row d-flex align-items-center justify-content-between m-1 px-1">
    <div class="col-md-3">
      <button @click="like(post.id)" class="btn btn-sm btn-primary mx-3">
        {{ post.likes.length }} <i class="mdi mdi-thumb-up"></i>
      </button>
      <button
        v-if="post.creator.id === account.id"
        @click="remove(post.id)"
        class="btn btn-sm btn-danger m-1"
      >
        Delete <i class="mdi mdi-trash-can"></i>
      </button>
    </div>
    <div class="col-md-4 m-1">
      <small> {{ post.createdAt }} </small>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { useRouter } from "vue-router";
import Pop from "../utils/Pop";
import { postService } from "../services/PostService";
export default {
  props: { post: { type: Object, required: true } },

  setup(props) {
    const router = useRouter();
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),

      routeTo() {
        router.push({
          name: "Profile",
          params: { id: props.post.creatorId },
        });
      },

      async like(id) {
        try {
          postService.like(id);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },

      async remove(id) {
        try {
          postService.remove(id);
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