import axios from 'axios'

export const useGet = (url, params = {}) => {
  return axios({
    method: 'get',
    url,
    params
  })
}
