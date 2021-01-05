import request from '@/utils/request'

export default {
    //查询热门名师
  getTopTeacherList(num) {
    return request({
      url: `/cms/teacher/top/${num}`,
      method: 'get'
    })
  }
}