<script setup>
import { getNewProductAPI } from '@/apis/home.js'
import HomePanel from './HomePanel.vue'
import {ref,onMounted} from 'vue'

let newList=ref([])

async function getNewProduct(){
    let response=await getNewProductAPI()
    newList.value=response.result
    console.log(response)
}

onMounted(()=>{
    getNewProduct()
})

</script>

<template>
  <HomePanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
  <ul class="goods-list">
    <li v-for="item in newList" :key="item.id">
      <RouterLink to="/">
        <img v-img-lazy="item.picture" :alt="item.desc" />
        <p>{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
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
  }
}
</style>
