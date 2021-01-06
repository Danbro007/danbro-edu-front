import request from '@/utils/request'

export default {
  //查询热门名师
  getTopTeacherList(num) {
    return request({
      url: `/edu/front/teacher/top/${num}`,
      method: 'get'
    })
  },
  //分页查询讲师
  getTeacherList(current, limit) {
    return request({
      url: `/edu/front/teacher/${current}/${limit}`,
      method: 'get'
    })
  },
  //获取讲师信息
  getTeacherInfo(id) {
    return request({
      url: `/edu/front/teacher/${id}`,
      method: 'get'
    })
  },
}
