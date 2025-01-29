<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixedNav from './components/LayoutFixedNav.vue';
import {useCategoryStore} from '@/stores/category.js'
import {onMounted} from 'vue';

let categoryStore=useCategoryStore()

onMounted(()=>{
    categoryStore.getCategory()
})
</script>

<template>
    <LayoutFixedNav></LayoutFixedNav>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView></RouterView>
    <LayoutFooter></LayoutFooter>
</template>