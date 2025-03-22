import httpInstance from '@/utils/http'

export const insertCart = ({ skuId, count }) => {
    return httpInstance({
      url: '/member/cart',
      method: 'POST',
      data: {
        skuId,
        count
      }
    })
  }
  
export const getCartList = () => {
    return httpInstance({
        url: '/member/cart',
        method: 'GET'
    })
}

// 删除购物车
export const deleteCart = (ids) => {
    return httpInstance({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}
//合并购物车
export const mergeCart = (data) => {
    return httpInstance({
        url: '/member/cart/merge',
        method: 'POST',
        data
    })
}

