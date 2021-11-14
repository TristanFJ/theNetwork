<template>
  <div class="profile-modal">
    <form @submit.prevent="editProfile" class="input-group">
      <!-- Button trigger modal -->
      <button
        v-if="profile.id === account.id"
        @click.prevent="editProfile"
        type="button"
        class="btn btn-primary btn-lg rounded elevation-5"
        data-bs-toggle="modal"
        data-bs-target="#modelId"
      >
        Edit Profile
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="modelId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Profile Details</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                v-model="editable.picture"
                type="text"
                class="form-control"
                placeholder="user image"
              />

              <input
                v-model="editable.coverImg"
                type="text"
                class="form-control"
                placeholder="cover image"
              />
              <input
                v-model="editable.name"
                type="text"
                class="form-control"
                placeholder="username"
              />

              <input
                v-model="editable.bio"
                type="text"
                class="form-control"
                placeholder="bio"
              />

              <input
                v-model="editable.class"
                type="text"
                class="form-control"
                placeholder="class"
              />
              <input
                v-model="editable.github"
                type="text"
                class="form-control"
                placeholder="github"
              />
              <input
                v-model="editable.resume"
                type="text"
                class="form-control"
                placeholder="resume"
              />

              <input
                v-model="editable.linkedin"
                type="text"
                class="form-control"
                placeholder="linkedin"
              />

              <div class="form-check">
                <input
                  v-model="editable.graduated"
                  class="form-check-input"
                  type="checkbox"
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Graduated
                </label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { computed, reactive, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { profilesService } from "../services/ProfilesService";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const editable = ref({});
    return {
      editable,
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),

      async editProfile() {
        try {
          await profilesService.editProfile(editable.value);
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
input {
  margin: 3px;
}

.form-check {
  width: 120px;
  margin: 5%;
}
</style>