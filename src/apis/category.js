import httpInstance from '@/utils/http'

export const getCategory = (id) => {
  return httpInstance({
    url: '/category',
    params: {
        id
  }
  })
}

export const getCategoryFilter = (id) => {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}
/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
   export const getSubCategory = (data) => {
    return httpInstance({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }