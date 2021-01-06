import request from '@/utils/request'

export default {
    //查询热门课程
  getTopCourseList(num) {
    return request({
      url: `/edu/front/course/top/${num}`,
      method: 'get'
    })
  }
}