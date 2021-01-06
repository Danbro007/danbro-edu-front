import request from '@/utils/request'

export default {
    //根据手机号发验证码
  login(user) {
    return request({
      url: `/user/login`,
      method: 'post',
      data:user
    })
  }
}