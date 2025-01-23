<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNewProduct.vue'
import HomeHot from './components/HomeHotProduct.vue'
import HomeProduct from './components/HomeProductList.vue'
</script>

<template>
  <div class="container">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>
  <HomeNew></HomeNew>
  <HomeHot></HomeHot>
  <HomeProduct></HomeProduct>
</template>
