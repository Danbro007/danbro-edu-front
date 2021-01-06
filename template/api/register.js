import request from '@/utils/request'

export default {
    //根据手机号发验证码
  sendCode(phone) {
    return request({
      url: `/msm/captcha`,
      method: 'post',
      data:phone
    })
  },

  //注册的方法
  registerMember(formItem) {
    return request({
      url: `/user/register`,
      method: 'post',
      data: formItem
    })
  }

}