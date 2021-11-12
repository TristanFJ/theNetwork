import { logger } from "../utils/Logger"
import {api} from './AxiosService'
class PostService {
  async getAll(query = ''){
    const res = await api.get('api/posts' + query)
    logger.log('get posts', res.data)
  }
}
export const postService = new PostService()