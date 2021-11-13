import { logger } from "../utils/Logger"
import { api } from './AxiosService'
import { AppState } from "../AppState"
import { Post } from "../models/Post"
import Pop from "../utils/Pop"
class PostService {
  async getAll(query = '', fullUrl = 'api/posts') {

    const res = await api.get(fullUrl + query)
    // logger.log('get posts', res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.page = res.data.page
    AppState.prevPage = res.data.newer
    AppState.nextPage = res.data.older
    // logger.log(AppState.newer, AppState.older)
  }


  async createPost(data) {
    const res = await api.post('api/posts', data)
    // logger.log('post: ', res.data)
    AppState.posts.unshift(res.data)
  }

  async like(id) {
    const res = await api.post(`api/posts/${id}/like`)
    // logger.log('like: ', res.data)
  }

  async remove(id) {
    const yes = await Pop.confirm('Delete?')
    if (!yes) { return }
    const res = await api.delete('api/posts/' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
    logger.log(res.data)
  }
}
export const postService = new PostService()