import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategory } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategoryList = async () => {
    const res = await getCategory()
    categoryList.value = res.result
  }

  return { categoryList, getCategoryList }
})
