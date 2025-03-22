import axios from 'axios'
import { ElMessage } from 'element-plus'
import "element-plus/es/components/message/style/css"
import { useUserStore } from '@/stores/user'
import router from '@/router'
const httpInstance=axios.create({
    baseURL:'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:100000
})

//axious请求拦截器
httpInstance.interceptors.request.use(config=>{
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},err=>{

    return Promise.reject(err)
})

//axious响应拦截器
httpInstance.interceptors.response.use(res=>{
    return res.data
},err=>{
    ElMessage({type:"error",message:err.response.data.message})
    if(err.response.status === 401){
        const userStore = useUserStore()
        userStore.logout()
        router.push('/login')
    }
    return Promise.reject(err)
})

export default httpInstance



