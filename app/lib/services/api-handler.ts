import axios from 'axios';

const BASE_API_URL = `https://pokeapi.co/api/v2/`;
/** *
 * The ApiHandler framework with observable
 */

const apiHandlers = {
  post: async (url: string, data: any) => axios.post(BASE_API_URL + url, data),
  get: async (url: string, options?: any) => {
    return axios.get(BASE_API_URL + url);
  },
};

export default apiHandlers;
