import request from '@/utils/request'
export default {
  getPlayAuth(vid) {
    return request({
      url: `/vod/video/auth/${vid}`,
      method: 'get'
    })
  }

}