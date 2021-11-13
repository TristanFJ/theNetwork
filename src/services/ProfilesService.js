import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { api } from "./AxiosService";

class ProfilesService {
  async getProfile(id) {
    const res = await api.get('api/profiles/' + id)
    logger.log('profile', res.data)
    AppState.profile = res.data
  }

  async editProfile(profile) {
    const res = await api.put('/account/', profile)
    logger.log(res.data)
    const updatedProfile = res.data
    AppState.profile = updatedProfile


  }
}

export const profilesService = new ProfilesService()