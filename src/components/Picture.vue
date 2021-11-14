<template>
  <div class="pictures py-5 m-4">
    <img :src="picture.banner" alt="" />
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  props: { picture: { type: Object, required: true } },
  setup() {
    return {
      pictures: computed(() => AppState.pictures),
    };
  },
};
</script>


<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>