<script setup>
// 引入组件
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFix from '@/views/Layout/components/LayoutFix.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategoryList()
})
</script>

<template>
  <LayoutFix />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>


