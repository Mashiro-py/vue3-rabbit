//管理用户相关数据
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login } from '@/apis/user'
import { useCarStore } from './carstore'
import { mergeCart } from '@/apis/cart'


export const useUserStore = defineStore('user', () => {
    const carstore = useCarStore()
    const userInfo = ref({})
    const getUserInfo = async ({ account, password }) => {
        const res = await login({ account, password })
        console.log(res.result)
        userInfo.value = res.result
        await mergeCart(carstore.carList.map(item => ({skuId:item.skuId,selected:item.selected,count:item.count})))
        carstore.updateCarList()
    }
    const logout = async () => {
        userInfo.value = {}
        carstore.clearCar()
        
    }
    return {
        userInfo,
        getUserInfo,
        logout
    }
}, {
    persist: true
})