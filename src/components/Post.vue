<template>
  <div class="post row">
    <div @click="routeTo" class="col-3 m-3 selectable">
      <h5>{{ post.creator.name }}</h5>
      <img :src="post.creator.picture" style="width: 150px" alt="" />
    </div>
    <div class="row d-flex align-items-center">
      <div class="col-md-2">
        <button @click="like(post.id)" class="btn btn-primary m-5">
          {{ post.likes.length }} <i class="mdi mdi-thumb-up"></i>
        </button>
      </div>
      <div v-if="post.creator.id === account.id" class="col-md-2">
        <button @click="remove(post.id)" class="btn btn-danger m-5">
          Delete <i class="mdi mdi-trash-can"></i>
        </button>
      </div>
      <div class="col-md-6 m-5">
        {{ post.body }}
      </div>
      <div class="col-md-2 m-5">
        {{ post.createdAt }}
      </div>
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