<script setup>
import BaseBlock from "../shared/BaseBlock.vue";
import AddButton from "../shared/AddButton.vue";
import NextButton from "../shared/NextButton.vue"
import ProductList from "../widgets/ProductList.vue"
import { useProductStore } from "../stores/ProductStore";
import { useMemberStore } from "../stores/MemberStore"

const productStore = useProductStore()
const memberStore = useMemberStore()

const members_ids = memberStore.homies.reduce((accum, item) =>  [...accum, item.id], [])
</script>
<template>
    <BaseBlock>
        <AddButton @onClick="productStore.addNewProduct(members_ids)">Добавить позицию</AddButton>
        <ProductList />
        <NextButton :routeName="'AddProductsView'"/>
    </BaseBlock>
</template>
<style lang='scss' scoped>
</style>