import { AppState } from "../AppState";
import { Picture } from "../models/Picture";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class PicturesService {
  async getAll() {
    const res = await api.get('api/ads')
    // logger.log('get pictures', res.data)
    AppState.pictures = res.data.map(p => new Picture(p))
    // logger.log('appstate.pictures: ', AppState.pictures)
  }
}

export const picturesService = new PicturesService()