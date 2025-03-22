import httpInstance from '@/utils/http'

// 获取支付信息
export const getPayInfo = (id) => {
    return httpInstance.get(`/member/order/${id}`)
}

