import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from './user'
import { insertCart, getCartList, deleteCart } from '@/apis/cart'
export const useCarStore = defineStore('car', () => {
    const carList = ref([])
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    const updateCarList = async () => {
        const res = await getCartList()
        carList.value = res.result
    }
    const addCar = async (car) => {
        if (isLogin.value) {
            const { skuId, count } = car
            await insertCart({ skuId, count })
            await updateCarList()
        } else {
            const item = carList.value.find(item => item.skuId === car.skuId)
            if (item) {
                item.count++
            } else {
                carList.value.push(car)
            }

        }

    }
    //清空购物车
    const clearCar =  () => {
            carList.value = []
    }
    const delCar = async (skuId) => {
        if (isLogin.value) {
            await deleteCart([skuId])
            await updateCarList()
        } else {
            carList.value = carList.value.filter(item => item.skuId !== skuId)
        }
    }

    const singleCheck = (skuId, selected) => {
        const item = carList.value.find(item => item.skuId === skuId)
        if (item) {
            item.selected = selected
        }
    }
    const allCheck = (selected) => {
        carList.value.forEach(item => {
            item.selected = selected
        })
    }
    const isAllSelected = computed(() => {
        return carList.value.every(item => item.selected)
    })


    //计算属性，计算总数和总价
    const totalCount = computed(() => {

        return carList.value.reduce((total, item) => total + item.count, 0)
    })
    const totalPrice = computed(() => {
        return carList.value.reduce((total, item) => total + item.price * item.count, 0)
    })
    //计算属性，计算选中商品的数量和总价
    const selectedCount = computed(() => {
        return carList.value.filter(item => item.selected).reduce((total, item) => total + item.count, 0)
    })
    const selectedPrice = computed(() => {
        return carList.value.filter(item => item.selected).reduce((total, item) => total + item.price * item.count, 0)
    })

    return {
        carList,
        addCar,
        delCar,
        updateCarList,
        clearCar,
        totalCount,
        totalPrice,
        singleCheck,
        allCheck,
        selectedCount,
        selectedPrice,
        isAllSelected
    }
}, {
    persist: true
})

