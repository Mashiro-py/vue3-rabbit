import httpInstance from '@/utils/http'

export const getCheckoutInfo = () => {
    return httpInstance({
        url: '/member/order/pre',
        method: 'GET',
    })
}
//创建订单
export const createOrder = (data) => {
    return httpInstance({
        url: '/member/order',
        method: 'POST',
        data
    })
}
