import http from '@/utils/http'

export const getBanner = (params={}) => {
    const {distributionSite="1"} = params   
  return http.get('/home/banner',{params:{distributionSite}})
}

export const getNew = () => {
  return http.get('/home/new')
}

export const getHot = () => {
  return http.get('/home/hot')
}

export const getGoods = () => {
  return http.get('/home/goods')
}





