import httpInstance from '@/utils/http'

export const login = ({account,password}) => {
  return httpInstance({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}
export const getLikeListAPI = ({ limit = 4 }) => {
    return httpInstance({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }
