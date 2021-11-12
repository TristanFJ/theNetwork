<template>
  <div class="post row">
    <div class="col m-5">
      <h4>{{ post.creator.name }}</h4>
      <img :src="post.creator.picture" style="width: 150px" alt="" />
    </div>
    <div class="row">
      <div class="col m-5">
        {{ post.body }}
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