import httpInstance from '@/utils/http'

export const getCategory = () => {
    return httpInstance.get('/home/category/head')
}


