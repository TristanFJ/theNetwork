import { logger } from "../utils/Logger"
import {api} from './AxiosService'
import { AppState } from "../AppState"
import { Post } from "../models/Post"
class PostService {
  async getAll(query = ''){
    const res = await api.get('api/posts' + query)
    // logger.log('get posts', res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    logger.log(AppState.posts)
  }
}
export const postService = new PostService()