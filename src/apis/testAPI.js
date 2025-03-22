import httpInstance from '@/utils/http'

export const testAPI=()=>{
    return httpInstance.get('home/category/head')
}


