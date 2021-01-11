import request from '@/utils/request'

export default {
  //查询热门课程
  getTopCourseList(num) {
    return request({
      url: `/edu/front/course/top/${num}`,
      method: 'get'
    })
  },
  //条件分页课程查询的方法
  getCourseList(page, limit, searchObj) {
    return request({
      url: `/edu/front/course/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  //查询所有分类的方法
  getAllSubject() {
    return request({
      url: '/edu/subject',
      method: 'get'
    })
  },
  //课程详情的方法
  getCourseInfo(id) {
    return request({
      url: 'edu/front/course/' + id,
      method: 'get'
    })
  },

  checkOrderInfo(courseId) {
    return request({
      url: 'edu/front/course/order/' + courseId,
      method: 'get'
    })
  }
}


