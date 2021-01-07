import request from '@/utils/request'

export default {
    getPageList(page, limit, courseId) {
        return request({
            url: `/edu/front/comment/${courseId}/${page}/${limit}`,
            method: 'get'
        })
    },
    addComment(comment) {
        return request({
            url: `/edu/front/comment/`,
            method: 'post',
            data: comment
        })
    }
}