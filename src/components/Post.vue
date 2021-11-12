<template>
  <div class="post row">
    <div class="col m-3">
      <h4>{{ post.creator.name }}</h4>
      <img :src="post.creator.picture" style="width: 150px" alt="" />
    </div>
    <div class="row d-flex align-items-center">
      <div class="col-1">
        <button class="btn btn-primary m-5">
          {{ post.likes.length }} <i class="mdi mdi-thumb-up"></i>
        </button>
      </div>
      <div class="col-6 m-5">
        {{ post.body }}
      </div>
      <div class="col-2 m-5">
        {{ post.createdAt }}
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  props: { post: { type: Object, required: true } },
  setup() {
    return {
      posts: computed(() => AppState.posts),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>