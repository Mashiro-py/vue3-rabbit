<script setup>
import { getCategoryFilter, getSubCategory } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'

const route = useRoute()
const categoryFilter = ref({})  
const subCategory = ref([])
const requestParams = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})

const getCategoryFilterData = async () => {
  const res = await getCategoryFilter(route.params.id)
  categoryFilter.value = res.result
}

onMounted(() => {
  getCategoryFilterData()
})

const getSubCategoryData = async () => {
  const res = await getSubCategory(requestParams.value)
  subCategory.value = res.result
  subCategory.value=res.result.items
  console.log(res)
}

onMounted(() => {
  getSubCategoryData()
})

const onTabChange = () => {
  requestParams.value.page = 1
  getSubCategoryData()
}

const load = async () => {
  requestParams.value.page++
  const res = await getSubCategory(requestParams.value)
  subCategory.value = [...subCategory.value, ...res.result.items]
  if(res.result.items.length === 0){
    loading.value = true
  }
}

const loading = ref(false)
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryFilter.parentId}` }">{{categoryFilter.parentName}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{categoryFilter.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="requestParams.sortField" @tab-change="onTabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="loading">
        <GoodsItem v-for="item in subCategory" :key="item.id" :goods="item"></GoodsItem>
         <!-- 商品列表-->
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>