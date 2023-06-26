<script setup>
import BaseBlock from "../shared/BaseBlock.vue";
import AddButton from "../shared/AddButton.vue";
import NextButton from "../shared/NextButton.vue"
import ProductList from "../widgets/ProductList.vue"
import { useProductStore } from "../stores/ProductStore";
import MemberGroupCards from "../entities/MemberGroupCards.vue"

const productStore = useProductStore()
</script>
<template>
    <BaseBlock>
        <AddButton @onClick="productStore.addNewProduct()">Добавить позицию</AddButton>
        <ProductList />
        <NextButton :routeName="'AddProductsView'"/>
    </BaseBlock>
</template>
<style lang='scss' scoped>
</style>