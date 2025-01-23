<script setup>
import { getBannerAPI } from '@/apis/home.js'
import {ref,onMounted} from 'vue'

let bannerPicture=ref([])

async function getBanner() {
    let response=await getBannerAPI()
    console.log(response)
    bannerPicture.value=response.result
}

onMounted(()=>{
    getBanner()
})
</script>

<template>
  <div class="home-banner">
    <!--使用 ElementPlus 的轮播图组件-->
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerPicture" :key="item.id">
        <img :src="item.imgUrl" alt="Picture">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 140px;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
