import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  profile: {},
  posts: {},
  prevPage: null,
  nextPage: null,
  page: ''
})

// TODO likes in appstate to update on new likes?