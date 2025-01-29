<script setup>
import { getHotProductAPI } from '@/apis/home.js'
import HomePanel from './HomePanel.vue'
import {ref,onMounted} from 'vue'

let hotList=ref([])

async function getHotProduct(){
    let response=await getHotProductAPI()
    hotList.value=response.result
    console.log(response)
}

onMounted(()=>{
    getHotProduct()
})

</script>

<template>
  <HomePanel title="人气推荐" subtitle="人气爆款 不容错过">
  <ul class="goods-list">
    <li v-for="item in hotList" :key="item.id">
      <RouterLink to="/">
        <img v-img-lazy="item.picture" :alt="item.alt" />
        <p>{{ item.title }}</p>
        <p class="alt">{{ item.alt }}</p>
      </RouterLink>
    </li>
  </ul>
  </HomePanel>
  
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }

    .alt{
      color: #999;
      font-size: 18px;
    }
  }
}
</style>